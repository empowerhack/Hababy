import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { MedicalHistoryPage } from '../history/index';
import { SymptomEntryPage } from '../symptoms/entry';

@Component({
  templateUrl: 'patient.html'
})
export class PatientPage {

  public historyPage;
  public symptomPage;

  constructor( private translate: TranslateService ) {
     this.historyPage = MedicalHistoryPage;
     this.symptomPage = SymptomEntryPage;
  }
}
