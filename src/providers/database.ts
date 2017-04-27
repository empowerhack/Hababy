/*
  Generated class for the Database provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

import { Injectable } from '@angular/core';
import {SQLite} from 'ionic-native';

import { PatientHistory } from '../models/patienthistory';
import { Patient } from '../models/patient';

@Injectable()
export class Database {

    private storage: SQLite;
    private isOpen: boolean;
    public  patientHistory: PatientHistory;

    public constructor() {
        if (!this.isOpen) {
            this.storage = new SQLite();
            this.patientHistory = null;

            this.storage.openDatabase({name: "data.db", location: "default"})
            .then( (data) => {
                this.isOpen = true;

                return this.storage.executeSql("CREATE TABLE IF NOT EXISTS symptom_log (id INTEGER PRIMARY KEY AUTOINCREMENT, timestamp TEXT, symptom1 INTEGER, symptom2 INTEGER, symptom3 INTEGER, notes TEXT)", {});
            })
            .then((data) => {
                // console.log("TABLE CREATED: ", data);
                // this.storage.executeSql("DROP TABLE IF EXISTS patient_history", {});

                return PatientHistory.create_table(this.storage);
            })
            .then((data) => {
                // console.log("TABLE CREATED: ", data);
                // return this.storage.executeSql("DROP TABLE IF EXISTS patients", {});

                // for clinicians - can have multiple patients
                return Patient.create_table(this.storage);
            })
            .catch((error) => {
                  console.error("Unable to execute sql", error);
            });
      }
    }

    // add up to three symptoms plus notes
    public addSymptomsToLog(symptoms, notes) {

        return new Promise((resolve, reject) => {
          var date = new Date();
          var formattedDate = date.toUTCString().split(' ').slice(0, 5).join(' ');

          var symptom1 = symptoms.length > 0 ? symptoms[0] : "";
          var symptom2 = symptoms.length > 1 ? symptoms[1] : "";
          var symptom3 = symptoms.length > 2 ? symptoms[2] : "";

          this.storage.executeSql("INSERT INTO symptom_log (timestamp, symptom1, symptom2, symptom3, notes) VALUES (?, 1, 0, 1, ?)", [formattedDate, notes]).then((data) => {
              resolve(data);
          }, (error) => {
              reject(error);
          });
        });

    }

    public updateSymptom(timestamp, notes)
    {
        return new Promise((resolve, reject) => {
          this.storage.executeSql("UPDATE symptom_log SET notes = :notes WHERE timestamp = :timestamp", [notes, timestamp]).then((data) => {
              let symptom_log = [];
              for(var i = 0; i < data.rows.length; i++) {
                  symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
              }

              resolve(symptom_log);
          }, (error) => {
              reject(error);
          });
        });
    }

    public deleteAllSymptoms() {
        return new Promise((resolve, reject) => {
          this.storage.executeSql("DELETE FROM symptom_log", []).then((data) => {
              resolve(data);
          }, (error) => {
              reject(error);
          });
        });
    }

    public getSymptoms(sortby, sortdir) {

        return new Promise((resolve, reject) => {

            let symptom_log = [];

            if (sortby == "symptom") {
                this.storage.executeSql("SELECT * FROM symptom_log WHERE symptom1=1 ORDER BY timestamp DESC", [])
                .then((data) => {
                    for(var i = 0; i < data.rows.length; i++) {
                          symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                    }
                    return this.storage.executeSql("SELECT * FROM symptom_log WHERE symptom2=1 ORDER BY timestamp DESC", []);
                })
                .then((data) => {
                    for(var i = 0; i < data.rows.length; i++) {
                          symptom_log.push({timestamp: data.rows.item(i).timestamp, symptom1: data.rows.item(i).symptom1, symptom2: data.rows.item(i).symptom2, symptom3: data.rows.item(i).symptom3, notes: data.rows.item(i).notes});
                    }
                    resolve(symptom_log);
                }, (error) => {
                    console.log("ERROR: " + JSON.stringify(error));
                });
            }
            else {
              this.storage.executeSql("SELECT * FROM symptom_log ORDER BY " + sortby + " " + sortdir, []).then((data) => {
                  if(data.rows.length > 0) {
                      for(let i = 0; i < data.rows.length; i++) {
                          symptom_log.push({timestamp: data.rows.item(i).timestamp,
                          symptom1: data.rows.item(i).symptom1,
                          symptom2: data.rows.item(i).symptom2,
                          symptom3: data.rows.item(i).symptom3,
                          notes: data.rows.item(i).notes});
                      }
                  }
                  resolve(symptom_log);
              }, (error) => {
                  reject(error);
              });
            }
        });
    }

    // USER MEDICAL HISTORY

    // returns Promise
    public getHistory()
    {
        return new Promise((resolve, reject) => {

            if (this.patientHistory) {
                // already loaded
                resolve(this.patientHistory);
            }
            else {
                PatientHistory.load(this.storage)
                .then((data: PatientHistory) => {
                    this.patientHistory = data;
                    resolve(this.patientHistory);

                }, (error) => {
                  reject(error);
                });
            }
        });
    }

    // returns Promise
    public updateHistory()
    {
        return this.patientHistory.save(this.storage);
    }

    // returns Promise
    public clearHistory() {
        return PatientHistory.clear(this.storage);
    }

    // PATIENTS

    // returns Promise
    public getPatients()
    {
        return Patient.load(this.storage);
    }

    // generic function to save a model instance
    public save(instance)
    {
        return instance.save(this.storage);
    }
}
