import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loginUrl: string = "http://127.0.0.1:8000/api/login/";

  // Function to store token in local storage after login
  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Function to check if user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }

  // Function to log in
  login(data: User): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http
      .post(this.loginUrl, data, { headers: headers, observe: 'response' })
      .pipe(
        tap((response) => {
          console.log(response);
          const tokenResponse = (response.body as any)?.token;
          const accessToken = tokenResponse.access; // Access the 'access' token
          this.storeToken(accessToken);
        })
      );
  }

  // Function to get the stored token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Function to log out
  logout(): void {
    localStorage.removeItem('token');
  }
}
