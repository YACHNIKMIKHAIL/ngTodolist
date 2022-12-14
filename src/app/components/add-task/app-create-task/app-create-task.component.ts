import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {TaskService} from "../../../services/task.service";
import {AppService} from "../../../services/app.service";

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.scss']
})
export class AppCreateTaskComponent implements OnInit {
  newTaskTitle: string = ''

  constructor(private modalService: ModalService,
              private appService: AppService,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  addTask() {
    this.modalService.close()
    this.appService.setIsLoad(true)
    this.taskService.addNewTask(this.newTaskTitle).subscribe(res => {
      this.taskService.addOne(res.data.item)
      this.appService.setIsLoad(false)
    })
  }
}
