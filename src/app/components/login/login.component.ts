import {Component, Injectable, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {
  title: string = 'Bat-login'
  email: string = ''
  pass: string = ''

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  logIn() {
    this.loginService.logIn(this.email, this.pass)
  }
}