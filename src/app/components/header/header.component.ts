import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ResponseType} from "../../services/http/todolistsHttp.service";

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
    this.loginService.logOut().subscribe((res:ResponseType) => {
      res.messages.length === 0 && this.loginService.isAuthFunc(false)
    })
  }
}
