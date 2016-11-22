import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';

import { PatientPage } from '../home/patient';

@Component({
  templateUrl: 'entry.html'
})
export class SymptomEntryPage {

  constructor( public navCtrl: NavController,
      private translate: TranslateService ) {
  }
}
