import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ITask, TaskService} from "../../services/task.service";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() todolistId: string = ''

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  deleteTask(taskId: string) {
    console.log(this.todolistId)
    console.log(taskId)
    this.taskService.deleteTask(this.todolistId, taskId)
  }
}
