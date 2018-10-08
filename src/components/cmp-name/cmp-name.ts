import { Component, Input } from "@angular/core";
import { IPerson } from "../../pages/home/home";

/**
 * Generated class for the CmpNameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "cmp-name",
  templateUrl: "cmp-name.html"
})
export class CmpNameComponent {
  text: string;
  @Input()
  currentPerson: IPerson;

  constructor() {
    console.log("Hello CmpNameComponent Component");
    this.text = "Hello World";
  }
  currentPersonChange(event, person: IPerson) {
    this.currentPerson = person;
  }
}
