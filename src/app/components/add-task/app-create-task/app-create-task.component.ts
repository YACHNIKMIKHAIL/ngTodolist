import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.scss']
})
export class AppCreateTaskComponent implements OnInit {
  newTaskTitle: string = ''

  constructor(private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  addTask() {
    this.modalService.close()
    console.log(this.newTaskTitle)
  }
}
