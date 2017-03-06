import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database} from "../../providers/database";
import { PatientHistory } from '../../models/patienthistory';

@Component({
  templateUrl: 'medications.html'
})
export class MedicationsPage {

  medications: {
    surgery?: {
      had?: boolean,
      cesarion?: boolean,
      galbladder?: boolean,
      appendix?: boolean,
      bowel?: boolean,
      tubes?: boolean,
      heart?: boolean,
      brain?: boolean,
      other?: boolean,
      othersurgery?: string
    },
    medications?: {
      had?: boolean,
      which?: string
    },
    allergies?: {
      had?: boolean,
      which?: string
    },
    bloodtype?: string
  } = {
    surgery: {},
    medications: {},
    allergies: {},
    bloodtype: ''
  }

  constructor(public navCtrl: NavController, private database: Database ) {}

  ionViewDidEnter() {
    this.loadMedications();
  }

  loadMedications() {
      this.database.getHistory().then((result) => {
         if (result) {
            this.medications = result["medications"];
         }
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  saveAndContinue() {
      // save values
      this.database.patientHistory.medications = this.medications;
      this.database.updateHistory().then((result) => {
          console.log("medications saved");
          //navigate to next page
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  goBack() {
    this.navCtrl.pop();
  }
}
