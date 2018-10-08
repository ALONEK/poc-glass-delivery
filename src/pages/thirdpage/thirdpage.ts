import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thirdpage',
  templateUrl: 'thirdpage.html',
})
export class ThirdpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdpagePage');
  }
  dupaPageLink() {
    this.navCtrl.push("ScondpagePage");
  }
  homePageLink() {
  }
  thirdPageLink() {
    this.navCtrl.push("ThirdpagePage");
  }
}
