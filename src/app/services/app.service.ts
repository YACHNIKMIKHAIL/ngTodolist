import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AppService {
  router: Router = {} as Router
  isInitialized: boolean = false
  isLoading: boolean = false

  constructor(public loginService: LoginService,
              router: Router) {
    this.router = router
  }

  initialezeHandler() {
    this.loginService.authMe().subscribe(res => {
      this.isInitialized = true
      res.messages.length === 0
        ? this.loginService.isAuthFunc(true, res.data.login)
        : this.loginService.isAuthFunc(false)
    })
  }

  setIsLoad(v: boolean) {
    this.isLoading = v
  }
}
