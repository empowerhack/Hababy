import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { BasicInfoPage } from '../pages/basicinfo/basicinfo';
import { PatientPage } from '../pages/patients/patient';
import { ClinicianPage } from '../pages/clinicians/index';
import { SymptomEntryPage } from '../pages/symptoms/entry';
<<<<<<< HEAD
import { SymptomLogPage } from '../pages/symptoms/log';
import { EditLogPage } from '../pages/symptoms/editlog';
=======
import { MedicalHistoryPage } from '../pages/history/index';
import { HistoryProblemsPage } from '../pages/history/problems';

>>>>>>> master
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
    SymptomEntryPage,
<<<<<<< HEAD
    SymptomLogPage,
    EditLogPage,
=======
    MedicalHistoryPage,
    HistoryProblemsPage,
>>>>>>> master
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
    SymptomEntryPage,
<<<<<<< HEAD
    SymptomLogPage,
    EditLogPage,
=======
    MedicalHistoryPage,
    HistoryProblemsPage,
>>>>>>> master
    PregnancyInfoPage,
    LocationResourcesPage,
    HelpSettingsPage
  ],
  providers: []
})
export class AppModule {}
