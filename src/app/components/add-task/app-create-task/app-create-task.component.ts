import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../services/modal.service";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.scss']
})
export class AppCreateTaskComponent implements OnInit {
  newTaskTitle: string = ''

  constructor(private modalService: ModalService,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  addTask() {
    this.modalService.close()
    this.taskService.addNewTask(this.newTaskTitle).subscribe(res => {
      this.taskService.addOne(res.data.item)
      console.log(res)
    })
  }
}
