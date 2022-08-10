import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

export type FielErrorType = { field: string, error: string }
type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors?: Array<FielErrorType>
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = '123'
  pass: string = '123'
  login: string = ''
  isAuth: boolean = true

  constructor(public router: Router,
              private http: HttpClient) {
  }

  logIn(email: string, pass: string) {
    if (this.email === email && this.pass === pass) {
      this.isAuth = true
      this.router.navigate([''])
    } else {
      alert('Incorrect email or pass !')
    }
  }

  logOut() {
    this.isAuth = false
    this.router.navigate(['/login'])
  }

  authMe(): Observable<ResponseType<{
    id: number,
    login: string,
    email: string
  }>> {
    return this.http.get<ResponseType<{
      id: number,
      login: string,
      email: string
    }>>(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

}
