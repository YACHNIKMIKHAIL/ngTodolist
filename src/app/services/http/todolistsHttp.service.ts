import {IFilter} from "../../components/todolist/todolist.component";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {baseUrl, FielErrorType, httpOptions} from "./logAuthHttp.service";

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
export class SamuraiServiceTodolists {
  constructor(private http: HttpClient) {
  }

  fetchTodolists(): Observable<ITodolist[]> {
    return this.http.get<ITodolist[]>(`${baseUrl}/todo-lists`, httpOptions)
  }

  addNewTodolist(title: string): Observable<PostTodolistType> {
    return this.http.post<PostTodolistType>(`${baseUrl}/todo-lists`, {title}, httpOptions)
  }

  deleteTodolist(todolistId: string): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`${baseUrl}/todo-lists/${todolistId}`, httpOptions)
  }

  changeTodolistTitle(title: string, todolistId: string): Observable<ResponseType> {
    return this.http.put<ResponseType>(`${baseUrl}/todo-lists/${todolistId}`, {title}, httpOptions)
  }
}
