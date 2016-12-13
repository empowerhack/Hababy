import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { BasicInfoPage } from '../pages/basicinfo/basicinfo';
<<<<<<< HEAD
import { PatientPage } from '../patients/home/patient';
import { SymptomEntryPage } from '../patients/symptoms/entry';
import { SymptomLogPage } from '../patients/log/log';
=======
import { PatientPage } from '../pages/patients/patient';
import { ClinicianPage } from '../pages/clinicians/index';
import { SymptomEntryPage } from '../pages/symptoms/entry';
import { SymptomLogPage } from '../pages/symptoms/log';
import { PregnancyInfoPage } from '../pages/pregnancy/index';
import { LocationResourcesPage } from '../pages/resources/index';
import { HelpSettingsPage } from '../pages/help/index';
>>>>>>> master

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
<<<<<<< HEAD
    SymptomEntryPage,
    SymptomLogPage
=======
    ClinicianPage,
    SymptomEntryPage,
    SymptomLogPage,
    PregnancyInfoPage,
    LocationResourcesPage,
    HelpSettingsPage
>>>>>>> master
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
<<<<<<< HEAD
    SymptomEntryPage,
    SymptomLogPage
=======
    ClinicianPage,
    SymptomEntryPage,
    SymptomLogPage,
    PregnancyInfoPage,
    LocationResourcesPage,
    HelpSettingsPage
>>>>>>> master
  ],
  providers: []
})
export class AppModule {}
