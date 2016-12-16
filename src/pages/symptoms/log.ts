import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import {SQLite} from "ionic-native";
import { NavController, Platform } from 'ionic-angular';
import { BasicInfoPage } from '../basicinfo/basicinfo';

@Component({
  templateUrl: 'log.html'
})
export class SymptomLogPage {
  public database: SQLite;
  public symptom_log: Array<Object>;
  public symptom1: Array<Object>;
  public symptom2: Array<Object>;

  public notes: string;
  public date: Date;
  public formattedDate: string;

  constructor( public navCtrl: NavController, private translate: TranslateService, private platform: Platform) {
      platform.ready().then((readySource) => {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
            this.sortByDate();
        }, (error) => {
            console.log("ERROR: ", error);
        });

        this.platform = platform;
        this.notes= "";

      console.log('Platform ready from', readySource);
      });
  }
    public delete() {
        this.database.executeSql("DELETE FROM symptom_log", []).then((data) => {
            console.log("DELETED " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public sortByDate() {
      this.database.executeSql("SELECT * FROM symptom_log ORDER BY timestamp DESC", []).then((data) => {
            this.symptom_log = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }

    public sortBySymptom() {
      this.symptom1 = [];
      this.symptom2 = [];
      this.symptom_log = [];
      this.database.executeSql("SELECT * FROM symptom_log WHERE symptom1=1 ORDER BY timestamp DESC", []).then((data) => {
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
      this.database.executeSql("SELECT * FROM symptom_log WHERE symptom2=1 ORDER BY timestamp DESC", []).then((data) => {
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}
