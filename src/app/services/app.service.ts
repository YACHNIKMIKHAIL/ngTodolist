import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {SamuraiServiceLogAuth} from "./http/logAuthHttp.service";


@Injectable({
  providedIn: 'root'
})

export class AppService {
  router: Router = {} as Router
  isInitialized: boolean = false
  isLoading: boolean = false
  login: string = ''
  isAuth: boolean = false

  constructor(
    private samuraiServiceLogAuth: SamuraiServiceLogAuth,
    router: Router) {
    this.router = router
  }

  initialezeHandler() {
    this.samuraiServiceLogAuth.authMe().subscribe(res => {
      this.isInitialized = true
      if (res.messages.length === 0) {
        this.login = res.data.login
        this.isAuth = true
      } else {
        this.isAuth = false
      }

      if (this.login !== '') {
        this.router.navigate(['/'])
      } else {
        this.router.navigate(['/login'])
      }

    })
  }

  setIsLoad(v: boolean) {
    this.isLoading = v
  }
}
