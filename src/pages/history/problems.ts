import { Component } from '@angular/core';
import {TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'problems.html'
})
export class HistoryProblemsPage {

  cesarian:
   { had?: boolean,
     smallbaby?: boolean,
     bigbaby?: boolean,
     bleeding?: boolean,
     breech?: boolean,
     highbp?: boolean,
     nolaborprogress?: boolean,
     nopushingprogress?: boolean,
     babydistressed?: boolean,
     infection?: boolean,
     abnormality?: boolean } = {};
  wassmall: boolean;
  stuckduringdelivery: boolean;
  heavybleeding: boolean;
  liverproblems: boolean;
  highbloodsugar: boolean;
  bloodclots: boolean;
  deliveredearly: boolean;
  highpressure: boolean;


  constructor( private translate: TranslateService ) {
  }

  onCesarian() {
    console.log("cesarian change: " + this.cesarian.had);
  }

  saveAndContinue() {
    console.log("cesarian bleeding: " + this.cesarian.bleeding);
  }
}
