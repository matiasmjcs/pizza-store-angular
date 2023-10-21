import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/api/v1/auth/login';
  private apiUrl2 = 'http://localhost:3000/api/v1/auth/profile';
  private apiUrl3 = 'http://localhost:3000/api/v1/auth/profile';
  private tokenSession!: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const data = {
      email,
      password,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };

    return this.http.post(this.apiUrl, data, httpOptions)
      .pipe(
      map((response) => {
        return response
      }),
        catchError(error => {
          console.error('Error:', error);
          return error;
        })
      );
  }

  signup(username: string, email: string, password: string): Observable<any> {
    const data = {
      username,
      email,
      password,
    };
    return this.http.post(this.apiUrl3,data).pipe(
      map((response) => {
        return response
      }),
      catchError(error => {
        console.error('Error:', error);
        return error;
      })
    )
  }

  profile(): Observable<any> {

    return this.http.get(this.apiUrl2, {
      withCredentials: true,
    })
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }


}
