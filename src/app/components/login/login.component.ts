import {Component, Injectable, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ResponseType} from "../../services/http/todolistsHttp.service";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

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

  constructor(public loginService: LoginService,
              private router:Router,
              public appService: AppService) {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5)
    ]),
    pass: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get eMail() {
    return this.form.controls.email as FormControl
  }

  get password() {
    return this.form.controls.pass as FormControl
  }

  submit() {
    if (this.form.controls.email.errors || this.form.controls.pass.errors) return
    this.logIn()
  }

  logIn() {
    this.loginService.logIn({
      email: this.form.value.email as string,
      password: this.form.value.pass as string,
      rememberMe: true
    }).subscribe((res: ResponseType<{
      userId?: number
    }>) => {
      if (!!res.data.userId) {
        this.appService.isAuth = true
        this.appService.login = res.data.userId.toString()
        this.router.navigate(['/'])
      }
    })
  }
}
