import {Component, OnInit} from '@angular/core';

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

export interface ITodolist {
  id: string,
  title: string,
  description?: string,
  todoListId?: string,
  order?: number,
  status: TaskStatuses,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string,
  addedDate?: string
  loading?: boolean
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todolists: ITodolist[] = [
    {
      id: Date.now().toString(),
      title: 'git commit',
      status: TaskStatuses.Complited,
    },
    {
      id: Date.now().toString(),
      title: 'git push',
      status: TaskStatuses.New,
    },

    {
      id: Date.now().toString(),
      title: 'git commit',
      status: TaskStatuses.Complited,
    },
    {
      id: Date.now().toString(),
      title: 'git push',
      status: TaskStatuses.New,
    },
    {
      id: Date.now().toString(),
      title: 'git commit',
      status: TaskStatuses.Complited,
    },
    {
      id: Date.now().toString(),
      title: 'git push',
      status: TaskStatuses.New,
    },
    {
      id: Date.now().toString(),
      title: 'git commit',
      status: TaskStatuses.Complited,
    },
    {
      id: Date.now().toString(),
      title: 'git push',
      status: TaskStatuses.New,
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
