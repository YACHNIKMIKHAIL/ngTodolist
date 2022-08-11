import {Injectable} from '@angular/core';
import {IFilter} from "../components/todolist/todolist.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FielErrorType} from "./samurai.service";

export interface ITodolist {
  id: string
  title: string
  addedDate?: string
  order?: number
  filter?: IFilter
}

export type PostTodolistType = {
  data: {
    item: {
      id: string,
      title: string,
      addedDate: string,
      order: number
    }
  },
  messages: [],
  fieldsErrors: [],
  resultCode: number
}
export type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors?: Array<FielErrorType>
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todolists: ITodolist[] = []

  constructor(
    private http: HttpClient) {
  }

  setTodolists(todolists: ITodolist[]) {
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

  addNewTodolist(title: string): Observable<PostTodolistType> {
    return this.http.post<PostTodolistType>(`https://social-network.samuraijs.com/api/1.1/todo-lists`, {title}, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  addNew(todolist: ITodolist) {
    this.todolists.unshift(todolist)
  }

  deleteTodolist(todolistId: string): Observable<ResponseType> {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
    return this.http.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  changeFilter(filter: IFilter, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, filter} : t)
  }

  changeTodolistTitle(title: string, todolistId: string): Observable<ResponseType> {
    return this.http.put<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  changeOne(title: string, todolistId: string) {
    this.todolists = this.todolists.map(m => m.id === todolistId ? {...m, title} : m)
  }
}
