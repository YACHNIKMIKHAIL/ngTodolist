import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {Router} from "@angular/router";
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'NG-todolist';
  router: Router = {} as Router
  isInitialized: boolean = false

  constructor(public modalService: ModalService,
              public loginService: LoginService,
              router: Router) {
    this.router = router
  }

  ngOnInit(): void {
    this.loginService.authMe().subscribe(res => {
      this.isInitialized = true
      res.messages.length === 0
        ? this.loginService.isAuthFunc(true, res.data.login)
        : this.loginService.isAuthFunc(false)
    })
  }

}

