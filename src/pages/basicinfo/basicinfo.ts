import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController, Events } from 'ionic-angular';
import { PatientPage } from '../../patients/home/patient';

@Component({
  selector: 'page-basicinfo',
  templateUrl: 'basicinfo.html'
})
export class BasicInfoPage {

  constructor(public navCtrl: NavController, public events: Events, private translate: TranslateService) {  }

  clickPregnant() {
    this.events.publish('user:patient');
  }

}
