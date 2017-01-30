import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasicInfoPage } from '../basic-info/basic-info';

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class DisclaimerPage {

  constructor(
    private navCtrl: NavController
  ) {}

  acceptDisclaimer() {
    this.navCtrl.setRoot(BasicInfoPage);
  }

}
