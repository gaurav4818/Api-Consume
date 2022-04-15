import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BaseUrl='http://localhost:58669/api/Employee';
  constructor(private http:HttpClient) { }

  isAuthenticate=false;
  Login(user:any)
  {
    this.isAuthenticate=true;
    return this.http.post(this.BaseUrl+'/Login',user,{responseType:'json'}).pipe(
      catchError(this.handleError),
     );
  }
  SignUp(user:any)
  {
    return this.http.post(this.BaseUrl+'/SignUp',user,{responseType:'text'}).pipe(
      catchError(this.handleError),
     );
  }
  Logout()
  {
    this.isAuthenticate=false;
    localStorage.removeItem('userdata');
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.error;
    alert(errorMessage);
    /*if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }*/
    return throwError(errorMessage);
  }
}
