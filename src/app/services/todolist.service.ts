import {Injectable} from '@angular/core';

export interface ITodolist {
  id: string
  title: string
  addedDate?: string
  order?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todolists: ITodolist[] = [
    {
      id: '1659959584487',
      title: 'git commit',
    },
    {
      id: '1659959538696',
      title: 'git push',
    },


  ]

  constructor() {
  }

  addNewTodolist(title: string) {
    console.log('addNewTodolist', title)
    console.log('addNewTodolistID', this.todolists[this.todolists.length - 1].id + 1)
    this.todolists.push({
      id: this.todolists[this.todolists.length - 1].id + 1,
      title: title,
    })
  }

  deleteTodolist(todolistId: string) {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
  }
}
