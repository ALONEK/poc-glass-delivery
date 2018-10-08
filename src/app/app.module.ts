import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ComponentsModule } from "../components/components.module";
import { DupaServiceProvider } from "../providers/dupa-service/dupa-service";
import { HttpClientModule } from "@angular/common/http";
import { ScondpagePageModule } from "../pages/scondpage/scondpage.module";
import { ThirdpagePageModule } from "../pages/thirdpage/thirdpage.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule,
    ScondpagePageModule,
    ThirdpagePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DupaServiceProvider
  ]
})
export class AppModule { }
