import { Component, OnChanges, OnInit } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ItemnewProvider } from '../../providers/itemnew/itemnew'
import { NewPage } from '../new/new'
export interface IPerson {
  name: string
  age: number
  szcz: number
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnChanges, OnInit {
  list: IPerson[] = []
  CPerson: IPerson
  descending: boolean = false
  sortnamee: boolean = false

  constructor(
    private itemservice: ItemnewProvider,
    private navCtrl: NavController
  ) {
    console.log('Hello ItemnewProvider Provider')
  }
  ngOnInit() {
    this.list = this.itemservice.list
  }
  ngOnChanges() {
    console.log('sad', this.CPerson)
    if (this.CPerson && this.CPerson.szcz < -9) {
      console.log('ogarnij się')
    }
  }
  oke(e) {
    this.sortlist()
  }
  sortlist() {
    this.descending = !this.descending
    this.descending
      ? (this.list = this.list.sort((a: any, b: any) => {
          return a.age - b.age
        }))
      : (this.list = this.list.sort((a: any, b: any) => {
          return b.age - a.age
        }))
  }

  ppt(e) {
    this.sortname()
  }

  sortname() {
    this.sortnamee = !this.sortnamee
    this.sortnamee
      ? (this.list = this.list.sort((a: IPerson, b: IPerson) => {
          return a.name.length - b.name.length
        }))
      : (this.list = this.list.sort((a: IPerson, b: IPerson) => {
          return b.name.length - a.name.length
        }))
  }
  plus() {
    this.list = this.list.map((CPerson: IPerson) => {
      if (CPerson.name === this.CPerson.name) {
        CPerson.szcz++
        return CPerson
      }
      return CPerson
    })
  }
  minus() {
    this.list = this.list.map((CPerson: IPerson) => {
      if (CPerson.name === this.CPerson.name) {
        CPerson.szcz--
        return CPerson
      }
      return CPerson
    })
  }
  personChange(event, person: IPerson): void {
    this.CPerson = person
  }
  NP() {
    this.navCtrl.push('NewPage')
  }
}
