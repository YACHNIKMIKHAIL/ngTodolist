import {Injectable} from '@angular/core';
import {IFilter} from "../components/todolist/todolist.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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

  constructor(
    private http: HttpClient) {
  }

  setTodolists(todolists:ITodolist[]) {
    this.todolists = todolists.map(m => ({...m, filter: 'all'}))
  }
  fetchTodolists(): Observable<ITodolist[]> {
    return this.http.get<ITodolist[]>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  addNewTodolist(title: string) {
    if (this.todolists.length === 0) {
      this.todolists = []
      this.todolists.push({
        id: '1',
        title: title,
      })
    } else {
      this.todolists.push({
        id: this.todolists[this.todolists.length - 1].id + 1,
        title: title,
      })
    }

  }

  deleteTodolist(todolistId: string) {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
    console.log(this.todolists)
  }

  changeFilter(filter: IFilter, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, filter} : t)
  }

  changeTodolistTitle(title: string, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, title} : t)
  }
}
