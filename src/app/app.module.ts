import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { BasicInfoPage } from '../pages/basic-info/basic-info';
import { ClinicianPage } from '../pages/clinician/clinician';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { HelpSettingsPage } from '../pages/help-settings/help-settings';
import { HistoryPage } from '../pages/history/history';
import { HistoryProblemsPage } from '../pages/history-problems/history-problems';
import { HomePage } from '../pages/home/home';
import { LocationResourcesPage } from '../pages/location-resources/location-resources';
import { PatientPage } from '../pages/patient/patient';
import { PregnancyPage } from '../pages/pregnancy/pregnancy';
import { SymptomsEntryPage } from '../pages/symptoms-entry/symptoms-entry';
import { SymptomsLogPage } from '../pages/symptoms-log/symptoms-log';

export const pages = [
  AboutPage,
  BasicInfoPage,
  ClinicianPage,
  DisclaimerPage,
  HelpSettingsPage,
  HistoryPage,
  HistoryProblemsPage,
  HomePage,
  LocationResourcesPage,
  PatientPage,
  PregnancyPage,
  SymptomsEntryPage,
  SymptomsLogPage
];

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    pages
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
    pages
  ],
  providers: []
})
export class AppModule {}
