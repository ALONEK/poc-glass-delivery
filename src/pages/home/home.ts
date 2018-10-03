import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface IPerson {
  name: string;
  age: number;
  hp: number;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  descending:boolean = true;
  descending2:boolean = true;
  currentPerson:IPerson;

  list: IPerson[] = [
    {
      name: 'Johnson',
      age: 15,
      hp: 0
    },
    {
      name: 'Mat',
      age: 1,
      hp: 0
    },
    {
      name: 'Katty',
      age: 18,
      hp: 0
    },
    {
      name: 'Lucy',
      age: 17,
      hp: 0
    }
  ]


  constructor(public navCtrl: NavController) {

  }

  sortage(e) {
    console.log('some stuff', e);
    this.sortlist();
  }

  sortname(e) {
    console.log('some stuff', e);
    this.sortlistname();
  }

  sortlist() {
    this.descending = !this.descending;
    console.log('xyz', this.descending)
    this.descending
    ? this.list = this.list.sort((a: IPerson, b: IPerson) => {
      console.log('dupa', this.descending)
      return a.age - b.age
    })
    : this.list = this.list.sort((a: IPerson, b: IPerson) => {
      return b.age - a.age
    });
  }

  sortlistname() {
    this.descending2 = !this.descending2;
    this.descending2
    ? this.list = this.list.sort((a: IPerson, b: IPerson) => {
      return a.name.length - b.name.length
    })
    : this.list = this.list.sort((a: IPerson, b: IPerson) => {
      return b.name.length - a.name.length
    });
  }

  currentPersonChange(event, person:IPerson) {
    this.currentPerson = person
  }

  plus() {
    this.currentPerson.hp++;
  }

  minus() {
    this.currentPerson.hp--;
  }
}
