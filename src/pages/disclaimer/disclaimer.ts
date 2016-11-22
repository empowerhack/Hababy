import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';
import { BasicInfoPage } from '../basicinfo/basicinfo';

@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class DisclaimerPage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {  }

  acceptDisclaimer() {
    // push another page onto the history stack
    // causing the nav controller to animate the new page in
    this.navCtrl.push(BasicInfoPage);
  }

}
