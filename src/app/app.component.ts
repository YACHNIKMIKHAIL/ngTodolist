import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {Router} from "@angular/router";
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // router: Router = {} as Router
  // isInitialized: boolean = false
  // isLoading: boolean = true

  constructor(public modalService: ModalService,
              public appService: AppService,
              ) {
  }

  ngOnInit(): void {
    this.appService.initialezeHandler()
  }

}

