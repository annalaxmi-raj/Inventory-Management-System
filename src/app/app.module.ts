import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MychartComponent } from './mychart/mychart.component';
import { Statistics2Component } from './statistics-2/statistics-2.component';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    NavComponent,
    StatisticsComponent,
    MychartComponent,
    Statistics2Component,
    QrcodeGeneratorComponent,
  ],
  imports: [BrowserModule,FormsModule, AppRoutingModule, AngularFireModule.initializeApp({
  apiKey: "AIzaSyAy0SG-Q8l5sA4lhfuiVHBjc-8MF3D5fig",
  authDomain: "stock-it-up-1e6ab.firebaseapp.com",
  projectId: "stock-it-up-1e6ab",
  storageBucket: "stock-it-up-1e6ab.appspot.com",
  messagingSenderId: "702687280945",
  appId: "1:702687280945:web:cc813ecdea9d9d34373a10",
  measurementId: "G-31QLTFVZMP"
}),QRCodeModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
