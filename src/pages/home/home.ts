import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DisclaimerPage } from '../en/disclaimer/disclaimer';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goEnglish() {
    // push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(DisclaimerPage);
  }
}
