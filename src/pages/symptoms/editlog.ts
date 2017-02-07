import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import {SQLite} from "ionic-native";
import { NavController, Platform } from 'ionic-angular';
import {SymptomLogPage} from '../symptoms/log';

@Component({
  templateUrl: 'editlog.html'
})
export class EditLogPage {

  public symptom_log: Array<Object>;
  public database: SQLite;

 constructor( public navCtrl: NavController, private translate: TranslateService, private platform: Platform) {
      platform.ready().then((readySource) => {
        this.database = new SQLite();
        this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
            console.log("DB opened")
        }, (error) => {
            console.log("ERROR: ", error);
        });

        this.platform = platform;

      console.log('Platform ready from', readySource);
      });
  }

  
  public updateEntry() {
    var notes = "updated notes";
    var timestamp = "Fri, 16 Dec 2016 14:46:44";

      this.database.executeSql("UPDATE symptom_log SET notes = :notes WHERE timestamp = :timestamp", [notes, timestamp]).then((data) => {
         this.symptom_log = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        this.navCtrl.setRoot(SymptomLogPage);
    }
}
