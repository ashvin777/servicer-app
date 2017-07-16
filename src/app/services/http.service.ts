import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http: Http) { }

  public sendHttpRequest(options: Object) {
    let people$ = this.http.get(`${this.baseUrl}/people`, this.getHeaders()).map(this.mapPersons);
    return people$;
  }

  private getHeaders(): Headers {
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private mapPersons(response: Response) {
    debugger;
    // toPerson looks just like in the previous example
    //return toPerson(response.json());
  }

}