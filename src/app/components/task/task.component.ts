import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {TodolistService} from "../../services/todolist.service";
import {IFilter} from "../todolist/todolist.component";
import {AppService} from "../../services/app.service";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() todolistId: string = ''
  @Input() currentFilter: IFilter | undefined = 'all'

  constructor(public taskService: TaskService,
              private appService: AppService,
              public todolistService: TodolistService) {
  }

  ngOnInit(): void {
    this.taskService.fetchTasks(this.todolistId)
      .subscribe(res => {
        this.taskService.setTasks(this.todolistId, res.items)
      })
    this.currentFilter = this.todolistService.todolists.filter(f => f.id === this.todolistId)[0].filter
  }

  deleteTask(taskId: string) {
    this.appService.setIsLoad(true)
    this.taskService.deleteTask(this.todolistId, taskId).subscribe(res => {
      res.messages.length === 0 && this.taskService.deleteOne(this.todolistId, taskId)
      this.appService.setIsLoad(false)
    })
  }

  changeStatus(taskId: string, todolistId: string, event: any) {
    this.appService.setIsLoad(true)
    this.taskService.changeTask(todolistId, taskId, event.target.checked)
      .subscribe(res => {
        res.messages.length === 0 && this.taskService.changeOne(todolistId, taskId, event.target.checked)
        this.appService.setIsLoad(false)
      })
  }
}
