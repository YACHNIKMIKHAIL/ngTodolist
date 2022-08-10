import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export type FielErrorType = { field: string, error: string }
type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors?: Array<FielErrorType>
  resultCode: number
}
export type initialLoginType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = '123'
  pass: string = '123'
  login: string = ''
  isAuth: boolean = false

  constructor(public router: Router,
              private http: HttpClient) {
  }

  logIn(data: initialLoginType): Observable<ResponseType<{
    userId?: number
  }>> {
    return this.http.post<ResponseType<{
      userId?: number
    }>>(`https://social-network.samuraijs.com/api/1.1/auth/login`, data, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  isAuthFunc(v: boolean, login?: string) {
    this.isAuth = v
    if (login) this.login = login
    v
      ? this.router.navigate(['/'])
      : this.router.navigate(['/login'])
  }

  logOut(): Observable<ResponseType> {
    this.isAuth = false
    this.login = ''
    // this.router.navigate(['/login'])
    return this.http.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/auth/login`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
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
