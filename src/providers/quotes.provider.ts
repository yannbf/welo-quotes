import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesProvider {

  apiURL = 'http://localhost:3000/';

  constructor(public http: Http) { }

  getRandomQuote() {
    return this.http.get(this.apiURL + 'randomQuote').map(res => {
      return res.json();
    });
  }
}
