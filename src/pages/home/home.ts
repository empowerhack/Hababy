import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';

import { DisclaimerPage } from '../en/disclaimer/disclaimer';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController,
      private translate: TranslateService ) {
  }

  goEnglish() {
    this.translate.use('en');

    // push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(DisclaimerPage);
  }

  goArabic() {
    this.translate.use('ar');

    // push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(DisclaimerPage);
  }
}
