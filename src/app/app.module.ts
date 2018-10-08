import { NewPageModule } from './../pages/new/new.module'
import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { ComponentsModule } from '../components/components.module'
import { HttpClientModule } from '@angular/common/http'
import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { ItemnewProvider } from '../providers/itemnew/itemnew'

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    NewPageModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [StatusBar, SplashScreen, ItemnewProvider],
})
export class AppModule {}
