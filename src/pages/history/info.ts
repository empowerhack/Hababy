import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { HistoryProblemsPage } from '../history/problems';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'info.html'
})
export class MedicalInfoPage {


  smeartest: 
  {
    yes?: boolean
  } = {};

  constructor(public navCtrl: NavController, private translate: TranslateService) {
    
  }

}