import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { PatientPage } from '../patients/patient';

@Component({
  templateUrl: 'log.html'
})
export class SymptomLogPage {

  constructor( private translate: TranslateService ) {
  }
}
