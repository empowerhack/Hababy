import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { BasicInfoPage } from '../basicinfo/basicinfo';
import { MedicalHistoryPage } from '../history/index';

@Component({
  templateUrl: 'patient.html'
})
export class PatientPage {

  public historyPage;

  constructor( private translate: TranslateService ) {
     this.historyPage = MedicalHistoryPage;
  }
}
