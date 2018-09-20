import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {

  constructor(
    private http: Http
  ) { }

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/josn'
    };
    return new Headers(headersConfig);
  }

  public register(playload) {
    return this.http.post(`${environment.API_ENDPOINT}/users/register`, JSON.stringify(playload), {headers: this.setHeaders()}).map((response: Response) => {
      return response.json();
    })
  }

}
