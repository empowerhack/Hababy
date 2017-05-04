import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Database } from "../../providers/database";
import { Patient } from '../../models/patient';

@Component({
  templateUrl: 'newpatient.html'
})
export class ClinicianNewPatientPage {

  public patient: {
    birthyear?: string,
    gestation?: number,
    bplower?: number,
    bpupper?: number,
    rhesus?: string,
    bloodtype?: string,
    pregnancies?: string,
    otherdetails?: string
  } = {
    pregnancies: "0"
  };

  public yearSelectOptions = {
    title: "Birth Year",
    placeholder: "select year"
  };
  public gestationSelectOptions = {
    placeholder: "select"
  };
  public lowerPressureSelectOptions = {
    title: "lower",
    placeholder: "lower"
  };
  public upperPressureSelectOptions = {
    title: "upper",
    placeholder: "upper"
  };
  public bloodTypeSelectOptions = {
    title: "Blood Type",
    placeholder: "select"
  };
  public rhesusSelectOptions = {
    title: "Rhesus Status",
    placeholder: "select"
  };
  public previousSelectOptions = {
    title: "Previous Pregnancies"
  };
  public birthYears = [];
  public gestationWeeks = [];
  public bloodPressures = [];
  public bloodTypes = ["A", "B", "AB", "O"];
  public rhesusTypes = [];
  public previousPregnancies = [];

  constructor( public navCtrl: NavController, private translate: TranslateService, private database: Database ) {
     // birth year
     for (var i = 2002; i >= 1910; --i) {
        this.birthYears.push(i);
     }

     // gestation
     translate.get('clinician.newpatient.gestation.title', {value: 'gestation'}).subscribe((res: string) => {
        this.gestationSelectOptions["title"] = res;
     });
     for (var i = 1; i <= 42; ++i) {
        this.gestationWeeks.push({ value: i,
          label: i + " " + (i > 1 ? "weeks" : "week") });
     }
     // blood pressure
     for (var i = 60; i <= 200; i += 10) {
        this.bloodPressures.push(i);
     }
     // rhesusTypes
     this.rhesusTypes.push(translate.instant('clinician.newpatient.rhesus.positive'));
     this.rhesusTypes.push(translate.instant('clinician.newpatient.rhesus.negative'));
     this.rhesusTypes.push(translate.instant('clinician.newpatient.rhesus.unknown'));
     // previous
     for (var i = 1; i <= 9; ++i) {
        this.previousPregnancies.push("" + i);
     }
     this.previousPregnancies.push("10+");
  }

  public ionViewDidEnter() {

  }

  newPatient() {

      var newPatient = new Patient({  });
      this.database.save(newPatient).then((result) => {
          //
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }
}
