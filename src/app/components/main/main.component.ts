import {Component, Injectable, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class MainComponent implements OnInit {

  constructor(public appService:AppService) {
    console.log('MainComponentSay')
  }

  ngOnInit(): void {
    console.log('MainComponent',this.appService.isLoading)
  }
}
