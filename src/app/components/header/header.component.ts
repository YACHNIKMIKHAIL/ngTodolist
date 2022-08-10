import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = `NG batman -`

  constructor(public loginService: LoginService) {

  }

  ngOnInit(): void {
  }

  logOut() {
    this.loginService.logOut().subscribe(res => {
      res.messages.length === 0 && this.loginService.isAuthFunc(false)
    })
  }
}
