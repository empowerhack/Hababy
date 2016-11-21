import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-basicinfo',
  templateUrl: 'basicinfo.html'
})
export class BasicInfoPage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {  }

}
