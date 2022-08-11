import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {initialLoginType, SamuraiService} from "./samurai.service";

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
              private samuraiService: SamuraiService) {
  }

  logIn(data: initialLoginType) {
    return this.samuraiService.logIn(data)
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
    return this.samuraiService.logOut()
  }

  authMe() {
    return this.samuraiService.authMe()
  }
}
