import { HttpClient } from "@angular/common/http";
import { IPerson } from "./home";
import { DupaServiceProvider } from "./../../providers/dupa-service/dupa-service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { App, ViewController } from 'ionic-angular';

export interface IPerson {
  name: string;
  age: number;
  hp: number;
}
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  descending: boolean = true;
  descending2: boolean = true;
  currentPerson: IPerson;
  list: IPerson[] = [];

  constructor(
    public viewCtrl: ViewController,
    public appCtrl: App,
    public navCtrl: NavController,
    public dupa: DupaServiceProvider
  ) { }

  ngOnInit() {
    this.list = this.dupa.list;
  }

  sortage(e) {
    console.log("some stuff", e);
    this.sortlist();
  }

  sortname(e) {
    console.log("some stuff", e);
    this.sortlistname();
  }

  sortlist() {
    this.descending = !this.descending;
    console.log("xyz", this.descending);
    this.descending
      ? (this.list = this.list.sort((a: IPerson, b: IPerson) => {
        console.log("dupa", this.descending);
        return a.age - b.age;
      }))
      : (this.list = this.list.sort((a: IPerson, b: IPerson) => {
        return b.age - a.age;
      }));
  }

  sortlistname() {
    this.descending2 = !this.descending2;
    this.descending2
      ? (this.list = this.list.sort((a: IPerson, b: IPerson) => {
        return a.name.length - b.name.length;
      }))
      : (this.list = this.list.sort((a: IPerson, b: IPerson) => {
        return b.name.length - a.name.length;
      }));
  }

  currentPersonChange(event, person: IPerson) {
    this.currentPerson = person;
    console.log("dupa", person);
  }

  plus() {
    this.currentPerson.hp++;
  }

  minus() {
    this.currentPerson.hp--;
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
