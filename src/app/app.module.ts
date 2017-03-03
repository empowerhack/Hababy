import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { Database } from "../providers/database";

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { BasicInfoPage } from '../pages/basicinfo/basicinfo';
import { PatientPage } from '../pages/patients/patient';
import { ClinicianPage } from '../pages/clinicians/index';
import { SymptomLogPage } from '../pages/symptoms/log';
import { SymptomEntryPage } from '../pages/symptoms/entry';
import { EditLogPage } from '../pages/symptoms/editlog';
import { MedicalHistoryPage } from '../pages/history/index';
import { HistoryProblemsPage } from '../pages/history/problems';
import { MedicalInfoPage } from '../pages/history/info';
import { MedicationsPage } from '../pages/history/medications';
import { CurrentProblemsPage } from '../pages/history/currentproblems';

import { PregnancyInfoPage } from '../pages/pregnancy/index';
import { LocationResourcesPage } from '../pages/resources/index';
import { HelpSettingsPage } from '../pages/help/index';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    DisclaimerPage,
    BasicInfoPage,
    PatientPage,
    ClinicianPage,
    SymptomLogPage,
    SymptomEntryPage,
    EditLogPage,
    MedicalHistoryPage,
    HistoryProblemsPage,
    MedicalInfoPage,
    MedicationsPage,
    CurrentProblemsPage,
    PregnancyInfoPage,
    LocationResourcesPage,
    HelpSettingsPage
  ],
  imports: [
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    DisclaimerPage,
    BasicInfoPage,
    PatientPage,
    ClinicianPage,
    SymptomLogPage,
    SymptomEntryPage,
    EditLogPage,
    MedicalHistoryPage,
    HistoryProblemsPage,
    MedicalInfoPage,
    CurrentProblemsPage,
    MedicationsPage,
    PregnancyInfoPage,
    LocationResourcesPage,
    HelpSettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
