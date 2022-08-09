import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ITask, TaskService} from "../../services/task.service";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  tasks: ITask[] = []
  @Input() todolistId: string = ''

  constructor(public taskService: TaskService) {
    this.tasks = taskService.tasks
  }

  ngOnInit(): void {
  }

}
