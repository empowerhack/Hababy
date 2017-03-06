import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { HistoryProblemsPage } from '../history/problems';
import { MedicalInfoPage } from '../history/info';
import { NavController } from 'ionic-angular';
import { Database} from "../../providers/database";

@Component({
  selector: 'page-historyindex',
  templateUrl: 'index.html'
})
export class MedicalHistoryPage {

  public nextPage;
  public age;
  public kids;
  public births;
  public cesarean;
  public miscarriage;
  public problems;

  constructor(public navCtrl: NavController, private translate: TranslateService, private database: Database) {

  }

  public ionViewDidEnter() {
     this.database.getHistory().then((result) => {
         if (result) {
            // initialize page with history
          }
      }, (error) => {
          console.log("ERROR: ", error);
      });
  }

  public enterProblems() {
     if(this.problems == 'true') {
      console.log(this.problems);
      this.navCtrl.push(HistoryProblemsPage);
    }
    else {
      console.log(this.problems);
      this.navCtrl.push(MedicalInfoPage);
    }
  }
}
