import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { CurrentProblemsPage } from '../history/currentproblems';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'info.html'
})
export class MedicalInfoPage {

  smeartest
  smeartestnormal
  smeartestsurgery
  medication
  alcohol
  smoke
  contraception
  contraceptionType


  constructor(public navCtrl: NavController, private translate: TranslateService) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  enterInfo() {
    console.log("Save info and go to next page");
    this.navCtrl.push(CurrentProblemsPage);
  }

}
