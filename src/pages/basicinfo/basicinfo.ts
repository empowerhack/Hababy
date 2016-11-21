import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { NavController } from 'ionic-angular';
import { PatientPage } from '../../patients/home/patient';

@Component({
  selector: 'page-basicinfo',
  templateUrl: 'basicinfo.html'
})
export class BasicInfoPage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {  }

  clickPregnant() {
    // switch to Patient page as root
    this.navCtrl.setRoot(PatientPage)
      .then(function() {
        this.navCtrl.popToRoot();
      });
  }

}
