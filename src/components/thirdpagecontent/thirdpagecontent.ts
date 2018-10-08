import { Component } from '@angular/core';

/**
 * Generated class for the ThirdpagecontentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thirdpagecontent',
  templateUrl: 'thirdpagecontent.html'
})
export class ThirdpagecontentComponent {

  text: string;

  constructor() {
    console.log('Hello ThirdpagecontentComponent Component');
    this.text = 'Hello World';
  }

}
