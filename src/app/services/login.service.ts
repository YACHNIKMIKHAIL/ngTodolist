import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {initialLoginType, SamuraiServiceLogAuth} from "./http/logAuthHttp.service";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public router: Router,
              private http: HttpClient,
              private appService: AppService,
              private samuraiServiceLogAuth: SamuraiServiceLogAuth) {
  }

  logIn(data: initialLoginType) {
    return this.samuraiServiceLogAuth.logIn(data)
  }

  logOut() {
    this.appService.isAuth = false
    this.appService.login = ''
    return this.samuraiServiceLogAuth.logOut()
  }

  authMe() {
    return this.samuraiServiceLogAuth.authMe()
  }
}
