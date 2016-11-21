import { Component } from '@angular/core';
import { Platform, MenuController  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,
      public menu: MenuController,
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
      { title: 'Home', component: HomePage },
      { title: 'Disclaimer', component: DisclaimerPage }
    ];
  }

  initializeTranslateServiceConfig() {

    var userLang = navigator.language.split('-')[0];
    userLang = /(ar|en)/gi.test(userLang) ? userLang : 'en';

    this.translate.setDefaultLang('en');

    this.translate.use(userLang);
  }
}
