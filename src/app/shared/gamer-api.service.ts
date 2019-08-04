import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Gamer } from './gamer-model';

@Injectable({
  providedIn: 'root'
})
export class GamerApiService {

  baseurl = 'http://localhost:8082';

  constructor(private _http: HttpClient) { }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    })
  }

  // GET
  getAllGamers(): Observable<Gamer> {
    console.log('Get All Gamers info...');
    let result = this._http.get<any>(this.baseurl + '/api/gamer/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
    return result;
  }


   // Error handling
   errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
