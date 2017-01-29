import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { HistoryProblemsPage } from '../history/problems';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'index.html'
})
export class MedicalHistoryPage {

  public nextPage;
  public age;
  public kids;
  public births;
  public cesarean;
  public miscarriage;
  public problems;

  constructor(public navCtrl: NavController, private translate: TranslateService) {
    this.nextPage = HistoryProblemsPage;
  }
}
