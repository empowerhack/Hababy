import { Component } from '@angular/core';

import { HistoryProblemsPage } from '../history-problems/history-problems';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

  public nextPage;

  constructor() {
    this.nextPage = HistoryProblemsPage;
  }
}
