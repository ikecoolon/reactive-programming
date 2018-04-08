import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
@Injectable()
export class ReactiveService {
  constructor(public http: HttpClient) {

  }

  getList(){
    let url = 'http://localhost:3000/work-orders';
    // this.http.get('/api/work-orders');
    return this.http.get(url);
  }
}
