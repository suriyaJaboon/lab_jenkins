import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http'
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  public authToken : any;
  public user: any;
  public isDev: Boolean;

  constructor(private http:Http) {
    this.isDev = true;
  }

  authenticate(playload) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${environment.API_ENDPOINT}/users/authenticate`, playload, {headers: headers}).map((response: Response) => {
     return response.json();
    });
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${environment.API_ENDPOINT}/users/profile`, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
