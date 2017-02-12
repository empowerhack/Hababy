import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { NavController, Platform } from 'ionic-angular';
import {SymptomLogPage} from '../symptoms/log';
import {Database} from "../../providers/database";

@Component({
  templateUrl: 'editlog.html'
})
export class EditLogPage {

  public symptom_log: Array<Object>;

  constructor( public navCtrl: NavController, private translate: TranslateService, private database: Database) {
  }

  public updateEntry() {
      var notes = "updated notes";
      var timestamp = "Fri, 16 Dec 2016 14:46:44";

      this.database.updateSymptom(timestamp, notes).then((result) => {
         console.log("UPDATED: " + JSON.stringify(result));
         this.navCtrl.setRoot(SymptomLogPage);
      }, (error) => {
          console.log("ERROR: ", error);
      });
   }
}
