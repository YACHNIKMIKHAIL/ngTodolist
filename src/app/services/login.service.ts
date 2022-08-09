import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = '123'
  pass: string = '123'
  isAuth: boolean = false

  constructor(public router: Router) {
  }

  logIn(email: string, pass: string) {
    if (this.email === email && this.pass === pass) {
      this.isAuth = true
      this.router.navigate([''])
    } else {
      alert('Incorrect email or pass !')
    }
  }
}
