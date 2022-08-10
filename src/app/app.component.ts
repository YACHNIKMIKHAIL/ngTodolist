import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {Router} from "@angular/router";
import {LoginService} from "./services/login.service";
import {HttpClient} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NG-todolist';
  router: Router = {} as Router

  constructor(public modalService: ModalService,
              public loginService: LoginService,
              router: Router) {
    this.router = router
  }

  ngOnInit(): void {
    this.loginService.authMe().subscribe(res => {
      console.log(res)
    })

    if (this.loginService.isAuth) {
      this.router.navigate(['/'])
    } else {
      this.router.navigate(['/login'])
    }
  }

}

