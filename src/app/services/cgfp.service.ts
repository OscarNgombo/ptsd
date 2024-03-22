import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Cgfp } from '../models/cgfp.model';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [HttpClientModule],
  providers: [

  ],
})
export class CgfpService {

  baseUrl: string = 'http://127.0.0.1:8000/api/authUser/';
  loginUrl: string = "http://127.0.0.1:8000/login";
  constructor(private http: HttpClient) { }

  create(data: Cgfp): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.baseUrl + 'published', data, { headers: headers }); // Posting the data directly
  }
  login(data: User):Observable<any>{

    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.loginUrl, data, { headers: headers, observe: 'response'}).pipe(
      map(response => {
        return response.status; // Returns the HTTP status
      }),
      catchError(error => {
        return throwError(() => error); // Passes the error as a factory function
      })
    );

  }
}
