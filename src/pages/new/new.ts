import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  reload: boolean = false
  dupa = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient
  ) {}

  SPN() {
    this.reload = !this.reload
    this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise()
    this.reloadData()
  }
  reloadData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((a: any) => {
        this.dupa = a
        this.reload = !this.reload
      })
  }
}
