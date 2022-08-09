import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {TodolistService} from "../../services/todolist.service";
import {IFilter} from "../todolist/todolist.component";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() todolistId: string = ''
  @Input() currentFilter: IFilter | undefined = 'all'

  constructor(public taskService: TaskService,
              public todolistService: TodolistService) {
  }

  ngOnInit(): void {
    this.currentFilter = this.todolistService.todolists.filter(f => f.id === this.todolistId)[0].filter
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(this.todolistId, taskId)
  }
}
