import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {ITodolist, TodolistService} from "../../services/todolist.service";
import {TaskService} from "../../services/task.service";

export type IFilter = 'all' | 'completed' | 'active'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todolists: ITodolist[] = []

  constructor(public modalService: ModalService,
              public todolistService: TodolistService,
              public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.todolistService.fetchTodolists().subscribe(res => {
      this.todolistService.setTodolists(res)
    })
  }

  openModal(todolistId: string) {
    this.taskService.openModal(todolistId)
    this.modalService.open()
  }

  deleteTodolist(todolistId: string) {
    this.todolistService.deleteTodolist(todolistId).subscribe(res => {
      res.messages.length === 0 && this.taskService.deleteTodolist(todolistId)
    })

  }

  changeFilter(filter: IFilter, todolistId: string) {
    this.todolistService.changeFilter(filter, todolistId)
  }
}
