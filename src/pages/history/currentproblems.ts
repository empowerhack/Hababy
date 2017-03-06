import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database} from "../../providers/database";
import { PatientHistory } from '../../models/patienthistory';
import { MedicationsPage } from './medications';

@Component({
  templateUrl: 'currentproblems.html'
})


export class CurrentProblemsPage {

  problems: {
    have?: boolean,
    highbloodpressure?:
     { have?: boolean,
       medication?: boolean },
    diabetes?:
     { have?: boolean,
       tablets?: boolean,
       injections?: boolean
     },
    kidneydisease?:
     { have?: boolean,
       tablets?: boolean,
       injections?: boolean
     },
    heartdisease?:
     { have?: boolean,
       tablets?: boolean,
       surgery?: boolean
     },
    sicklecelldisease?:
     { have?: boolean,
       tablets?: boolean
     },
    epilepsy?:
     { have?: boolean,
       tablets?: boolean,
       whichtablets?: string,
       seizure?: string
     },
    asthma?:
     { have?: boolean,
       tablets?: boolean,
       inhaler?: boolean
     },
    tuberculosis?:
     { have?: boolean
     },
    irritablebowel?:
     { have?: boolean
     },
    hypothyroidism?:
     { have?: boolean,
       tablets?: boolean,
       overactivetreatment?: boolean,
       graves?: boolean
     },
    hyperthyroidism?:
     { have?: boolean,
       tablets?: boolean,
       carmibazole?: boolean,
       propylthiuracil?: boolean,
       surgery?: boolean
     },
    migraine?:
     { have?: boolean,
       tablets?: boolean
     },
    lupus?:
     { have?: boolean,
       medications?: boolean
     },
    hemophilia?:
     { have?: boolean
     },
    bloodclots?:
     { have?: boolean,
       legs?: boolean,
       lungs?: boolean,
       tablets?: boolean,
       injections?: boolean
     },
    hiv?:
     { have?: boolean,
       tablets?: boolean
     },
    crohns?:
     { have?: boolean,
       tablets?: boolean,
       surgery?: boolean
     },
    depression?:
     { have?: boolean,
       tablets?: boolean
     },
     other?: string
  } = {
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

  constructor( public navCtrl: NavController, private database: Database ) {
  }

  public ionViewDidEnter() {
      this.loadProblems();
  }

  loadProblems()
  {
     this.database.getHistory().then((result) => {
         if (result) {
            this.problems = result["currentProblems"];
         }
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  saveAndContinue() {
      // save values
      this.database.patientHistory.currentProblems = this.problems;
      this.database.updateHistory().then((result) => {
          this.navCtrl.push(MedicationsPage);
          console.log("problems saved");
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }
}
