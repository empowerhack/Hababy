import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';
import { NavController, Platform } from 'ionic-angular';
import { PatientPage } from '../home/patient';
import {SQLite} from "ionic-native";

@Component({
  templateUrl: 'entry.html'
})
export class SymptomEntryPage {

  public database: SQLite;
  public symptom_log: Array<Object>;

  constructor( public navCtrl: NavController, private translate: TranslateService, private platform: Platform) {
      platform.ready().then((readySource) => {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
            this.refresh();
        }, (error) => {
            console.log("ERROR: ", error);
        });

        this.platform = platform;

      console.log('Platform ready from', readySource);
      });
  }


  public add(symptomNotes) {
        this.database.executeSql("INSERT INTO symptom_log (timestamp, symptom1, symptom2, symptom3, notes) VALUES ('2016-12-05 19:39:00', 1, 0, 1, ?)", [symptomNotes]).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public delete() {
        this.database.executeSql("DELETE FROM symptom_log", []).then((data) => {
            console.log("DELETED " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.database.executeSql("SELECT * FROM symptom_log", []).then((data) => {
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

}
