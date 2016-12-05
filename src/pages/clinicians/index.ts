import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { BasicInfoPage } from '../../pages/basicinfo/basicinfo';

@Component({
  templateUrl: 'index.html'
})
export class ClinicianPage {

  constructor( private translate: TranslateService ) {
  }
}
