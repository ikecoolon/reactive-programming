import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routing} from "./app-routing";
import {ReactiveModule} from "./reactive/reactive.module";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
