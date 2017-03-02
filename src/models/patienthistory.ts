
export class PatientHistory {

	// these should all be JavaScript objects
	public pregnancyProblems: any;
	public currentProblems: any;
	public medications: any;

    constructor(attributes: any )
    {
    	if (attributes.pregnancyproblems && attributes.pregnancyproblems.length > 0) {
			this.pregnancyProblems = JSON.parse(attributes.pregnancyproblems);
		}
    	if (attributes.currentproblems && attributes.currentproblems.length > 0) {
			this.currentProblems = JSON.parse(attributes.currentproblems);
		}
    	if (attributes.medications && attributes.medications.length > 0) {
			this.medications = JSON.parse(attributes.medications);
		}
    }

	// loads history from SQL storage (there should only be one record to load)
    static load(storage) {
       return new Promise((resolve, reject) => {

            // load from storage
            storage.executeSql("SELECT * FROM patient_history", []).then((data) => {

                if (data.rows.length > 0) {
					// found data
                    resolve(new PatientHistory(data.rows.item(0)));
                }
                else
                {
                   // no data, add a new row
                   var date = new Date();
                   var formattedDate = date.toUTCString().split(' ').slice(0, 5).join(' ');

                   storage.executeSql("INSERT INTO patient_history (timestamp, pregnancyproblems, currentproblems) VALUES (?, ?, ?)", [formattedDate, "", ""]).then((data) => {
                      resolve(new PatientHistory({}));
                   }, (error) => {
                      reject(error);
                   });
                }

              }, (error) => {
                  reject(error);
              });
       });
    }

	// deletes patient history from storage
    static clear(storage) {
        return new Promise((resolve, reject) => {
          storage.executeSql("DELETE FROM patient_history", []).then((data) => {
              resolve(data);
          }, (error) => {
              reject(error);
          });
        });
    }

	// saves this history instance to storage
	public save(storage) {
        return new Promise((resolve, reject) => {
        	var sql = "UPDATE patient_history SET ";
        	var values = [];

        	sql += "pregnancyproblems = :pregnancyproblems"
      		sql += ", currentproblems = :currentproblems "
      		// sql += "medications = :medications "

			values.push(JSON.stringify(this.pregnancyProblems));
			values.push(JSON.stringify(this.currentProblems));
			// values.push(JSON.stringify(this.medications));

        	storage.executeSql(sql, values).then((data) => {
              	resolve(data);
          	}, (error) => {
              reject(error);
          	});
        });
	}

}
