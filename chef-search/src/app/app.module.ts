import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponenetsModule } from './common-componenets/common-componenets.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponenetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
