import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';
import { NavController, Platform } from 'ionic-angular';
import {SQLite} from "ionic-native";
import { PatientPage } from '../patients/patient';
import {SymptomLogPage} from '../symptoms/log';
import {Database} from "../../providers/database";

@Component({
  templateUrl: 'entry.html'
})
export class SymptomEntryPage {

  public symptom_log: Array<Object>;
  public notes: string;
  public date: Date;
  public formattedDate: string;

  constructor( public navCtrl: NavController, private translate: TranslateService, private platform: Platform, private database: Database) {
      platform.ready().then((readySource) => {
        this.platform = platform;
        this.notes= "";

        console.log('Platform ready from', readySource);

        var today=new Date();
        document.getElementById('currentdate').innerHTML= today.toUTCString().split(' ').slice(0, 5).join(' ');
      });
   }

   public add() {

        this.database.addSymptomsToLog([1, 0, 1], this.notes).then((result) => {
            console.log("INSERTED: " + JSON.stringify(result));
        }, (error) => {
            console.log("ERROR: ", error);
        });

        this.navCtrl.setRoot(SymptomLogPage);
    }

    public delete() {
        this.database.deleteAllSymptoms().then((data) => {
            console.log("DELETED " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.database.getSymptoms("timestamp", "DESC").then((data) => {
            this.symptom_log = <Array<Object>> data;
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

}
