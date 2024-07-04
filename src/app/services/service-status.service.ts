import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceStatusService {
  url = 'http://127.0.0.1:8000/api/create_services/';

  constructor(private http: HttpClient) {}

  createService(serviceData: any):Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.url, serviceData,{ headers: headers, observe: 'response' }).pipe(
      tap((response) => {
        console.log('Service created successfully:', response);
      }),
    );
  }
  getService(userID: number): Observable<any>{
    const url = 'http://127.0.0.1:8000/api/services/?userID=';
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(url+userID,{ headers: headers, observe: 'response' });
  }
}
