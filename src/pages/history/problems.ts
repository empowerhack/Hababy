import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'problems.html'
})
export class HistoryProblemsPage {

  constructor( private translate: TranslateService ) {
  }
}
