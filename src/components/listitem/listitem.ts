import { Component, Input } from '@angular/core'
import { IPerson } from '../../pages/home/home'

/**
 * Generated class for the ListitemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listitem',
  templateUrl: 'listitem.html',
})
export class ListitemComponent {
  text: string
  @Input()
  persone: IPerson

  constructor() {
    console.log('Hello ListitemComponent Component')
    this.text = 'Hello World'
  }
}
