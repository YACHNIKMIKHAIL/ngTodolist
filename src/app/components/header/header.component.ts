import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() name: string = 'todolist'
  title: string = `NG batman-${this.name}`

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  logOut() {
    this.loginService.logOut()
  }
}
