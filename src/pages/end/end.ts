import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-end',
  templateUrl: 'end.html'
})
export class EndPage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, ) {

  }

  goBack() : void {
    this.navCtrl.popToRoot();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

}
