import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class PatientPage {

  public historyPage;

  constructor() {
    this.historyPage = HistoryPage;
  }

}
