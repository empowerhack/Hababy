import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Database } from "../../providers/database";

import { NavController, Platform } from 'ionic-angular';
import { BasicInfoPage } from '../basicinfo/basicinfo';
import { EditLogPage } from '../symptoms/editlog';

@Component({
  templateUrl: 'log.html'
})
export class SymptomLogPage {
  public symptom_log: Array<Object>;
  public notes: string;
  public date: Date;

  constructor( public navCtrl: NavController, private translate: TranslateService, private platform: Platform, private database: Database) {
      platform.ready().then((readySource) => {

        this.platform = platform;
        this.notes= "";

      console.log('Platform ready from', readySource);
      });
   }

    public ionViewDidEnter() {
        this.sortByDate();
    }

    public delete() {
        this.database.deleteAllSymptoms().then((data) => {
            console.log("DELETED " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

    public update() {
        this.navCtrl.setRoot(EditLogPage);
    }

    public sortByDate() {
        this.database.getSymptoms("timestamp", "DESC").then((data) => {
            this.symptom_log = <Array<Object>> data;
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

    public sortBySymptom() {
        this.database.getSymptoms("symptom", "").then((data) => {
            this.symptom_log = <Array<Object>> data;
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}
