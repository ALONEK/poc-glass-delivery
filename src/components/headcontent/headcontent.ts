import { Component } from '@angular/core';

/**
 * Generated class for the HeadcontentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'headcontent',
  templateUrl: 'headcontent.html'
})
export class HeadcontentComponent {

  text: string;

  constructor() {
    console.log('Hello HeadcontentComponent Component');
    this.text = 'Hello World';
  }

}
