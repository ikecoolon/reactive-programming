import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ReactiveService} from "./reactive.service";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {


  list;

  constructor(public service: ReactiveService) {

  }

  ngOnInit() {
    this.test();
  }

  test() {
    let o1 = Observable.create(response => {
       return this.service.getList();
    });

    o1.subscribe(response => {
      //显示
      console.log(response);
      console.log(111);


    });
  }
}
