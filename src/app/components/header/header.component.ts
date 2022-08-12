import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ResponseType} from "../../services/http/todolistsHttp.service";
import {AppService} from "../../services/app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = `NG batman -`

  constructor(public appService: AppService,
              private router:Router,
              public loginService: LoginService,) {

  }

  ngOnInit(): void {
  }

  logOut() {
    this.loginService.logOut().subscribe((res: ResponseType) => {
      if (res.messages.length === 0) {
        this.appService.isAuth = false
        this.router.navigate(['/login'])
      }
    })
  }
}
