import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { HistoryProblemsPage } from '../history/problems';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'index.html'
})
export class MedicalHistoryPage {

  constructor(public navCtrl: NavController, private translate: TranslateService) {  }

  public hadProblems() {
    this.navCtrl.setRoot(HistoryProblemsPage);
  }
}
