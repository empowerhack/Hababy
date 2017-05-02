import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Database } from "../../providers/database";
import { Patient } from '../../models/patient';

@Component({
  templateUrl: 'newpatient.html'
})
export class ClinicianNewPatientPage {

  public yearSelectOptions = {
    title: "Birth Year",
    placeholder: "select year"
  };
  public birthYears = [];

  constructor( public navCtrl: NavController, private translate: TranslateService, private database: Database ) {
     for (var i = 2002; i >= 1910; --i) {
        this.birthYears.push(i);
     }
  }

  public ionViewDidEnter() {

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
          //
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }
}
