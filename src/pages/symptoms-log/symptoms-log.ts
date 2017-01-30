import { Component } from '@angular/core';
import { SQLite } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-symptoms-log',
  templateUrl: 'symptoms-log.html'
})
export class SymptomsLogPage {
  public database: SQLite;
  public symptom_log: Array<Object>;
  public notes: string;
  public date: Date;
  public formattedDate: string;

  constructor(
    private navCtrl: NavController,
    private platform: Platform
  ) {
    platform.ready().then((readySource) => {
      this.database = new SQLite();
      this.database.openDatabase({ name: "data.db", location: "default" }).then(() => {
        this.refresh();
      }, (error) => {
        console.log("ERROR: ", error);
      });

      this.platform = platform;
      this.notes = "";

      console.log('Platform ready from', readySource);
    });
  }

  public refresh() {
    this.database.executeSql("SELECT * FROM symptom_log", []).then((data) => {
      this.symptom_log = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          this.symptom_log.push({ timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes });
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

  public delete() {
    this.database.executeSql("DELETE FROM symptom_log", []).then((data) => {
      console.log("DELETED " + JSON.stringify(data));
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error.err));
    });
  }
}
