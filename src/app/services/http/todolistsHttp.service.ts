import {IFilter} from "../../components/todolist/todolist.component";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FielErrorType} from "./logAuthHttp.service";

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

  deleteTodolist(todolistId: string): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  changeTodolistTitle(title: string, todolistId: string): Observable<ResponseType> {
    return this.http.put<ResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }
}
