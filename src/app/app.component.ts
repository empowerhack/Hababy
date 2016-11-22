import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { HomePage } from '../pages/home/home';
import { PatientPage } from '../patients/home/patient';
import { SymptomEntryPage } from '../patients/symptoms/entry';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  patientPages: Array<{title: string, component: any}>;

  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
      public menu: MenuController,
      public events: Events,
      private translate: TranslateService
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.initializeTranslateServiceConfig();
    });

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

    // set patient section's pages
    this.patientPages = [
       { title: 'Patients', component: PatientPage },
       { title: 'Symptom Entry', component: SymptomEntryPage }
    ];

    this.events.subscribe('user:patient', () => {

      // switch to Patient page as root
      this.nav.popToRoot();
      this.nav.setRoot(PatientPage);
      this.enableMenu(true);
    });

    this.events.subscribe('user:clinician', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(isPatient) {
    this.menu.enable(!isPatient, 'appMenu');
    this.menu.enable(isPatient, 'patientMenu');
  }

  openPage(page: {title: string, component: any}) {

    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component).catch(() => {
      console.log("Didn't set nav root");
    });

    this.menu.close();
  }

  initializeTranslateServiceConfig() {

    var userLang = navigator.language.split('-')[0];
    userLang = /(ar|en)/gi.test(userLang) ? userLang : 'en';

    this.translate.setDefaultLang('en');

    this.translate.use(userLang);
  }
}
