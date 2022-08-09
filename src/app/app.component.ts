import {Component} from '@angular/core';
import {ModalService} from "./services/modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG-todolist';

  constructor(public modalService: ModalService,
              router:Router) {
    router.navigate(['/login'])
  }
}

