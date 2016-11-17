import { Component } from '@angular/core';
import { Platform, MenuController  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { DisclaimerPage } from '../pages/en/disclaimer/disclaimer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,
      public menu: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Disclaimer', component: DisclaimerPage }
    ];
  }
}
