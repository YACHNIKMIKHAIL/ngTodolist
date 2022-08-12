import {Injectable} from '@angular/core';
import {IFilter} from "../components/todolist/todolist.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ITodolist, PostTodolistType, SamuraiServiceTodolists} from "./http/todolistsHttp.service";
import {AppService} from "./app.service";


@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  todolists: ITodolist[] = []

  constructor(
    private http: HttpClient,
    private samuraiServiceTodolists: SamuraiServiceTodolists,
    public appService: AppService
  ) {
  }

  setTodolists(todolists: ITodolist[]) {
    this.todolists = todolists.map(m => ({...m, filter: 'all'}))
  }

  fetchTodolists(): Observable<ITodolist[]> {
    return this.samuraiServiceTodolists.fetchTodolists()
  }

  addNewTodolist(title: string): Observable<PostTodolistType> {
    this.appService.setIsLoad(true)
    return this.samuraiServiceTodolists.addNewTodolist(title)
  }

  addNew(todolist: ITodolist) {
    this.todolists.unshift({...todolist, filter: 'all'})
  }

  deleteTodolist(todolistId: string) {
    this.todolists = this.todolists.filter(f => f.id !== todolistId)
    return this.samuraiServiceTodolists.deleteTodolist(todolistId)
  }

  changeFilter(filter: IFilter, todolistId: string) {
    this.todolists = this.todolists.map(t => t.id === todolistId ? {...t, filter} : t)
  }

  changeTodolistTitle(title: string, todolistId: string) {
    return this.samuraiServiceTodolists.changeTodolistTitle(title, todolistId)
  }

  changeOne(title: string, todolistId: string) {
    this.todolists = this.todolists.map(m => m.id === todolistId ? {...m, title} : m)
  }
}
