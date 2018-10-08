import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IPerson } from '../../pages/home/home'
/*
  Generated class for the ItemnewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemnewProvider {
  list: IPerson[] = [
    {
      name: 'John',
      age: 55,
      szcz: 0,
    },
    {
      name: 'Mateusz',
      age: 18,
      szcz: 0,
    },
    {
      name: 'Jan',
      age: 87,
      szcz: 0,
    },
    {
      name: 'Kowal',
      age: 102,
      szcz: 0,
    },
  ]
  constructor(public http: HttpClient) {
    console.log('Hello ItemnewProvider Provider')
  }
}
