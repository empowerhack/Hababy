import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { NavController, Platform } from 'ionic-angular';

import { DisclaimerPage } from '../disclaimer/disclaimer';

import {SQLite} from "ionic-native";


@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  public database: SQLite;
  public people: Array<Object>;

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

    

  goEnglish() {
    this.translate.use('en');

    this.navCtrl.setRoot(DisclaimerPage);
  }

  goArabic() {
    this.translate.use('ar');

    this.navCtrl.setRoot(DisclaimerPage);
  }

    public add() {
        this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public delete() {
        this.database.executeSql("DELETE FROM people", []).then((data) => {
            console.log("DELETED " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }

    public refresh() {
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}


