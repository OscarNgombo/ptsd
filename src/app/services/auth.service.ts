import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, Service } from '../intreface/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loginUrl: string = 'http://127.0.0.1:8000/api/login/';

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

  getUserDetails(): User | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString) as User;
    } else {
      return null;
    }
  }
  getUserServices(): Service[] | null {
    const userServicesString = localStorage.getItem('services');
    if (userServicesString) {
      const userServices: Service[] = JSON.parse(userServicesString);
      return userServices;
    }
    return null;
  }



  // Function to log in
  login(data: User): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(this.loginUrl, data, { headers: headers, observe: 'response' }).pipe(
      switchMap((response) => {
        const tokenResponse = (response.body as any)?.token;
        const accessToken = tokenResponse.access; // Access the access token directly from the response
        this.storeToken(accessToken);

        const user = (response.body as any)?.user;
        localStorage.setItem('user', JSON.stringify(user));
        const userId = user.id;
        return this.http.get(`http://127.0.0.1:8000/api/services/?userID=${userId}`).pipe(
          map((servicesData: any) => {
            // const storedUserData = localStorage.getItem('user');
            // const storedUser = storedUserData ? JSON.parse(storedUserData) : null;
            // const storedToken = storedUser && typeof storedUser === 'object' ? storedUser.token : null;
            const services= servicesData.services

            localStorage.setItem('services', JSON.stringify(services)); // Store the merged data in local storage
            return services;
          })
        );
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
