import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Database} from "../../providers/database";

@Component({
  templateUrl: 'problems.html'
})
export class HistoryProblemsPage {

  problems: {
    cesarian?:
     { had?: boolean,
       smallbaby?: boolean,
       bigbaby?: boolean,
       bleeding?: boolean,
       breech?: boolean,
       highbp?: boolean,
       nolaborprogress?: boolean,
       nopushingprogress?: boolean,
       babydistressed?: boolean,
       infection?: boolean,
       abnormality?: boolean },
    wassmall?: boolean,
    stuckduringdelivery?: boolean,
    heavybleeding?:
     { had?: boolean,
       whilepregnant?: boolean,
       afterdelivery?: boolean
     },
    liverproblems?:
     { had?: boolean,
       medication?: boolean
     },
    highbloodsugar?:
     { had?: boolean,
       tablets?: boolean,
       injections?: boolean
     },
    bloodclots?:
     { had?: boolean,
       legs?: boolean,
       chest?: boolean
     },
    deliveredearly?:
    { did?: boolean,
       weeks?: string
     },
    highpressure?:
     { had?: boolean,
       medication?: boolean,
       seizure?: boolean
     }
  } = {
    cesarian: {},
    heavybleeding: {},
    liverproblems: {},
    highbloodsugar: {},
    bloodclots: {},
    deliveredearly: {},
    highpressure: {}
  };

  constructor( public navCtrl: NavController, private translate: TranslateService, private database: Database ) {
  }

  public ionViewDidEnter() {
      this.loadProblems();
  }

  loadProblems()
  {
     this.database.getProblems().then((result) => {
         if (result) {
            this.problems = result;
          }
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  onCesarian() {
  }

  saveAndContinue() {
      // save values
      this.database.updateProblems( JSON.stringify(this.problems)).then((result) => {
          console.log("problems saved");
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }
}
