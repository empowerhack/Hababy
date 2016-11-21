import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';

import { MyApp } from '../../app/app.component';
import { BasicInfoPage } from '../../pages/basicinfo/basicinfo';

@Component({
  templateUrl: 'patient.html'
})
export class PatientPage {

  constructor( public navCtrl: NavController,
      private translate: TranslateService ) {
  }
}
