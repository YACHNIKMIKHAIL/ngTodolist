import {Injectable} from '@angular/core';
import {IFilter} from "../components/todolist/todolist.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FielErrorType, SamuraiServiceTodolists} from "./samurai-service-log-auth.service";

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
    private http: HttpClient,
    private samuraiServiceTodolists: SamuraiServiceTodolists
  ) {
  }

  setTodolists(todolists: ITodolist[]) {
    this.todolists = todolists.map(m => ({...m, filter: 'all'}))
  }

  fetchTodolists(): Observable<ITodolist[]> {
    return this.samuraiServiceTodolists.fetchTodolists()
  }

  addNewTodolist(title: string): Observable<PostTodolistType> {
    return this.samuraiServiceTodolists.addNewTodolist(title)
  }

  addNew(todolist: ITodolist) {
    this.todolists.unshift(todolist)
  }

  deleteTodolist(todolistId: string): Observable<ResponseType> {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
    return this.samuraiServiceTodolists.deleteTodolist(todolistId)
  }

  changeFilter(filter: IFilter, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, filter} : t)
  }

  changeTodolistTitle(title: string, todolistId: string): Observable<ResponseType> {
    return this.samuraiServiceTodolists.changeTodolistTitle(title, todolistId)
  }

  changeOne(title: string, todolistId: string) {
    this.todolists = this.todolists.map(m => m.id === todolistId ? {...m, title} : m)
  }
}
