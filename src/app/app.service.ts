import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }

  public downloadAs(query) {
    return this.http.post('http://192.168.0.203:8000/api/export_pdf', query).toPromise();
  }
}
