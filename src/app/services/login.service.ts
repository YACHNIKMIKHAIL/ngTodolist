import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {initialLoginType, SamuraiServiceLogAuth} from "./samurai-service-log-auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = '123'
  pass: string = '123'
  login: string = ''
  isAuth: boolean = false

  constructor(public router: Router,
              private http: HttpClient,
              private samuraiServiceLogAuth: SamuraiServiceLogAuth) {
  }

  logIn(data: initialLoginType) {
    return this.samuraiServiceLogAuth.logIn(data)
  }

  isAuthFunc(v: boolean, login?: string) {
    this.isAuth = v
    if (login) this.login = login
    v
      ? this.router.navigate(['/'])
      : this.router.navigate(['/login'])
  }

  logOut() {
    this.isAuth = false
    this.login = ''
    return this.samuraiServiceLogAuth.logOut()
  }

  authMe() {
    return this.samuraiServiceLogAuth.authMe()
  }
}
