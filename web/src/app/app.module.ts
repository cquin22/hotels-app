import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AppRoutesModule} from './app.router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HotelService} from './service/hotel.service';
import {HotelStorage} from './storage/hotel.storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HotelService,
    HotelStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
