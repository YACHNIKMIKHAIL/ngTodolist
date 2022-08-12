import {transition, trigger, useAnimation} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {flash} from "ng-animate";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('bounce', [transition('* <=> *', useAnimation(flash))])
  ]
})

export class LoaderComponent implements OnInit {
  show = false;
  animState = false;

  animDone() {
      this.animState = this.appService.isLoading
  }

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }
}
