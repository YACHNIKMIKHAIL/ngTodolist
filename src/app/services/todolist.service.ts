import {Injectable} from '@angular/core';
import {IFilter} from "../components/todolist/todolist.component";

export interface ITodolist {
  id: string
  title: string
  addedDate?: string
  order?: number
  filter?: IFilter
}

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todolists: ITodolist[] = [
    {
      id: '1659959584487',
      title: 'git add',
    },
    {
      id: '1659959538696',
      title: 'git commit',
    },
    {
      id: '1659959584488',
      title: 'git push',
    },
    {
      id: '1659959538699',
      title: 'git merge',
    },
  ]

  constructor() {

  }

  fetchTodolists() {
    this.todolists=this.todolists.map(m=>({...m,filter:'all'}))
  }

  addNewTodolist(title: string) {
    this.todolists.push({
      id: this.todolists[this.todolists.length - 1].id + 1,
      title: title,
    })
  }

  deleteTodolist(todolistId: string) {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
  }
  changeFilter(filter: IFilter, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, filter} : t)
  }
}
