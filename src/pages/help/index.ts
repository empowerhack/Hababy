import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

import { PatientPage } from '../patients/patient';

@Component({
  templateUrl: 'index.html'
})
export class HelpSettingsPage {

  constructor( private translate: TranslateService ) {
  }
}
