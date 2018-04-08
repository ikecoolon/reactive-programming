import {NgModule} from '@angular/core';
import {ReactiveComponent} from './reactive.component';
import {routing} from "./reactive.routing";
import {CommonModule} from "@angular/common";
import {ReactiveService} from "./reactive.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    routing,
    CommonModule,
    HttpClientModule
  ],
  declarations: [ReactiveComponent],
  providers: [
    ReactiveService
  ]
})
export class ReactiveModule {
}
