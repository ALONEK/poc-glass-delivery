import { IPerson } from "./../../pages/home/home";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
/*
  Generated class for the DupaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DupaServiceProvider {
  list: IPerson[] = [
    {
      name: "Johnson",
      age: 15,
      hp: 0
    },
    {
      name: "Mat",
      age: 1,
      hp: 0
    },
    {
      name: "Katty",
      age: 18,
      hp: 0
    },
    {
      name: "Lucy",
      age: 17,
      hp: 0
    }
  ];

  constructor(public http: HttpClient) {
    console.log("Hello DupaServiceProvider Provider");
  }
}
