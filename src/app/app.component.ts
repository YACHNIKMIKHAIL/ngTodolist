import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public modalService: ModalService,
              public appService: AppService,
              ) {
  }

  ngOnInit(): void {
    this.appService.initialezeHandler()
  }

}

