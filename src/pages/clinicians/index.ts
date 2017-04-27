import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Database } from "../../providers/database";
import { Patient } from '../../models/patient';

@Component({
  templateUrl: 'index.html'
})
export class ClinicianPage {

  public patients: Array<Object>;

  constructor( public navCtrl: NavController, private translate: TranslateService, private database: Database ) {
  }

  public ionViewDidEnter() {
      this.loadPatients();
  }

  loadPatients()
  {
     this.database.getPatients().then((result) => {
         if (result) {
            // initialize page with retrieved patients
            this.patients = <Array<Object>> result;
          }
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  newPatient() {

      // for now, just create a new patient directly
      // TODO: go to new patient page
      var riskInt = Math.floor(Math.random() * 3);
      var risk = "low";
      if (riskInt > 2) { risk = "high" }
      else if (riskInt > 1) { risk = "medium" }

      var newPatient = new Patient({ risk: risk });
      this.database.save(newPatient).then((result) => {
          this.loadPatients();
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }
}
