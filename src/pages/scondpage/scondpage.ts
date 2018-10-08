import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
/**
 * Generated class for the ScondpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-scondpage",
  templateUrl: "scondpage.html"
})
export class ScondpagePage {
  loading: boolean = false;
  dupa = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ScondpagePage");
  }

  infoPageLink() {
    this.loadingData();
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .toPromise()
      .then(response => {
        console.log(response);
        this.loadingData();
        this.loadData();
      });
  }

  loadingData() {
    this.loading = !this.loading;
    console.log("dupa", this.loading);
  }

  loadData() {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe((a: any) => {
        this.dupa = a;
      });
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
