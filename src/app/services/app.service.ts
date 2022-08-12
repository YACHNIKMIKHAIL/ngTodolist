import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {initialLoginType, SamuraiServiceLogAuth} from "./http/logAuthHttp.service";
import {ModalService} from "./modal.service";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  router: Router = {} as Router
  isInitialized: boolean = false
  isLoading: boolean = true

  constructor(public loginService: LoginService,
              router: Router) {
    // this.router = router
  }

  isInitialise() {
    this.loginService.authMe().subscribe(res => {
      this.isInitialized = true
      this.isLoading = false
      res.messages.length === 0
        ? this.loginService.isAuthFunc(true, res.data.login)
        : this.loginService.isAuthFunc(false)
    })
  }

  setIsLoading(v: boolean) {
    this.isLoading = v
  }

}
