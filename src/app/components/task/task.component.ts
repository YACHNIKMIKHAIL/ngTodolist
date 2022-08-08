import {Component, Injectable, Input, OnInit} from '@angular/core';

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Complited = 2,
  Draft = 3
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  High = 2,
  Urgently = 3,
  Later = 4
}

export interface ITask {
  id: string,
  title: string,
  description?: string,
  todoListId: string,
  order?: number,
  status: TaskStatuses | boolean,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string,
  addedDate?: string
  loading?: boolean
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [
    {
      id: '1',
      title: 'title 1',
      todoListId: '1659959584487',
      status: false,
    },
    {
      id: '2',
      title: 'title 2',
      todoListId: '1659959584487',
      status: false,
    },
    {
      id: '3',
      title: 'title 333',
      todoListId: '1659959538696',
      status: true,
    }
  ]
  @Input() todolistId: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
