// model class for each patient for a clinician
export class Patient {

  public id: string;        // database ID
	public patientid: string; // ID for display
	public risk: string;
	public created: string;

  constructor(attributes: any )
  {
    	if (attributes.id) {
			    this.id = attributes.id;
		  }
		  else {
			    this.id = null;
      }

    	if (attributes.patientid) {
			    this.patientid = attributes.patientid;
		  }
		  else {
			    this.patientid = this.generatePatientId();
      }

    	if (attributes.risk) {
			    this.risk = attributes.risk;
		  }
		  else {
			    this.risk = "low";
      }

      if (attributes.created) {
          this.created = attributes.created;
      }
  }

  // creates patient table
  static create_table(storage)
  {
      return storage.executeSql("CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, patientid TEXT, risk TEXT)", {});
  }

	// loads all patients from SQL storage
  static load(storage) {
       return new Promise((resolve, reject) => {

          // load from storage
          storage.executeSql("SELECT * FROM patients", []).then((data) => {

              var patients = [];

					    // found data
					    for (var i = 0; i < data.rows.length; ++i) {
					        patients.push(new Patient(data.rows.item(i)));
              }

              resolve(patients);

            }, (error) => {
              reject(error);
            });
       });
  }

	// delete all patients from storage
  static clear(storage) {
        return new Promise((resolve, reject) => {
          storage.executeSql("DELETE FROM patients", []).then((data) => {
              resolve(data);
          }, (error) => {
              reject(error);
          });
        });
  }

	// saves this patient instance to storage
	public save(storage) {
      var sql = "";
      var values = [];

      if (this.id === null) {
        // new patient
        sql = "INSERT INTO patients (patientid, risk) VALUES (?, ?)";
      }
      else {
        sql = "UPDATE patients SET ";
        sql += "patientid = :patientid"
        sql += ", risk = :risk "
      }

      values.push(this.patientid);
      values.push(this.risk);

      // console.log(sql);
      // console.log(values);

      return storage.executeSql(sql, values);
	}

  public generatePatientId() {
    return "PA123456";
  }
}
