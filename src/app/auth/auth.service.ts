import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  user = new Subject<User>();  

  constructor(private httpClient: HttpClient) {}

  signup(email: string, password: string) {
    
    return this.httpClient
      .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKhfLGLSl6yBPfvUh3ZAVRNM3XjA1WS-M'
        ,{
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(catchError(this.handleError),
         tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  singin(email: string, password: string){
    return this.httpClient
      .post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKhfLGLSl6yBPfvUh3ZAVRNM3XjA1WS-M"
        ,{
          email: email,
          password: password,
          returnSecureToken: true
        }
    )
    .pipe(catchError(this.handleError),
    tap(resData => {
     this.handleAuthentication(
       resData.email,
       resData.localId,
       resData.idToken,
       +resData.expiresIn
     );
   })
   );       
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'Bilinmeyen Hata!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'Bu Mail Daha Önceden Kaydedilmiş';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Girilen Mail Adresi Geçersiz';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Girilen Şifre Geçersiz';
          break;        
      }
       return throwError(errorMessage);
  }

}
