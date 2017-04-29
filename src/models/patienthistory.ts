
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
		  else {
          this.pregnancyProblems = {
              cesarian: {},
              heavybleeding: {},
              liverproblems: {},
              highbloodsugar: {},
              bloodclots: {},
              deliveredearly: {},
              highpressure: {}
          };
      }
    	if (attributes.currentproblems && attributes.currentproblems.length > 0) {
			  this.currentProblems = JSON.parse(attributes.currentproblems);
		  }
		  else {
			  this.currentProblems = {
				highbloodpressure: {},
				diabetes: {},
				kidneydisease: {},
				heartdisease: {},
				sicklecelldisease: {},
				epilepsy: {},
				asthma: {},
				tuberculosis: {},
				irritablebowel: {},
				hypothyroidism: {},
				hyperthyroidism: {},
				migraine: {},
				lupus: {},
				hemophilia: {},
				bloodclots: {},
				hiv: {},
				crohns: {},
				depression: {}
			  };
		}
    	if (attributes.medications && attributes.medications.length > 0) {
			this.medications = JSON.parse(attributes.medications);
		}
		else {
			this.medications = {
				surgery: {},
				medications: {},
				allergies: {},
				bloodtype: ''
			}
		}
    }

  // creates patient history table
  static create_table(storage)
  {
      return storage.executeSql("CREATE TABLE IF NOT EXISTS patient_history (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, pregnancyproblems TEXT, currentproblems TEXT, medications TEXT)", {});
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
				   var history = new PatientHistory({});

                   storage.executeSql("INSERT INTO patient_history (timestamp, pregnancyproblems, currentproblems, medications) VALUES (?, ?, ?, ?)",
                   	[formattedDate, JSON.stringify(history.pregnancyProblems), JSON.stringify(history.currentProblems), JSON.stringify(history.medications)])
                   	.then((data) => {
                      resolve(history);
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
      		sql += ", medications = :medications "

			values.push(JSON.stringify(this.pregnancyProblems));
			values.push(JSON.stringify(this.currentProblems));
			values.push(JSON.stringify(this.medications));

        	storage.executeSql(sql, values).then((data) => {
              	resolve(data);
          	}, (error) => {
              reject(error);
          	});
        });
	}

}
