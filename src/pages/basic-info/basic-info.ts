import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-basic-info',
  templateUrl: 'basic-info.html'
})
export class BasicInfoPage {

  constructor(
    private navCtrl: NavController,
    private events: Events
  ) {}

  clickPregnant() {
    this.events.publish('user:patient');
  }
  clickCaregiver() {
    this.events.publish('user:clinician');
  }

}
