import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'NG batman-todolist'

  constructor(public isAuth: LoginComponent) {
  }

  ngOnInit(): void {
  }

}
