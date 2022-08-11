import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ITodolist, PostTodolistType} from "./todolist.service";
import {ApiTaskType, ITask, TaskPriorities, TaskStatuses} from "./task.service";

export type FielErrorType = { field: string, error: string }
type ResponseType<D = {}> = {
  data: D
  messages: string[]
  fieldsErrors?: Array<FielErrorType>
  resultCode: number
}
export type initialLoginType = {
  email: string
  password: string
  rememberMe: boolean
  captcha?: string
}

@Injectable({
  providedIn: 'root'
})

export class SamuraiServiceLogAuth {
  constructor(private http: HttpClient) {
  }

  logIn(data: initialLoginType): Observable<ResponseType<{
    userId?: number
  }>> {
    return this.http.post<ResponseType<{
      userId?: number
    }>>(`https://social-network.samuraijs.com/api/1.1/auth/login`, data, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  logOut(): Observable<ResponseType> {
    return this.http.delete<ResponseType>(`https://social-network.samuraijs.com/api/1.1/auth/login`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  authMe(): Observable<ResponseType<{
    id: number,
    login: string,
    email: string
  }>> {
    return this.http.get<ResponseType<{
      id: number,
      login: string,
      email: string
    }>>(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }
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


export type UpdateTaskType = {
  title: string
  description: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
}

@Injectable({
  providedIn: 'root'
})
export class SamuraiServiceTasks {
  constructor(private http: HttpClient) {
  }

  fetchTasks(todolistID: string): Observable<ApiTaskType> {
    return this.http.get<ApiTaskType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistID}/tasks`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  addNewTask(title: string,currentId:string): Observable<ResponseType<{ item: ITask }>> {
    return this.http.post<ResponseType<{ item: ITask }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${currentId}/tasks`, {title}, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  deleteTask(todolistId: string, taskId: string): Observable<ResponseType> {
    return this.http.delete<ResponseType<{ item: ITask }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }

  changeTask(todolistID: string, taskID: string, model:UpdateTaskType): Observable<ResponseType<{ item: ITask }>> {
    return this.http.put<ResponseType<{ item: ITask }>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistID}/tasks/${taskID}`, model, {
      withCredentials: true,
      headers: {
        "API-KEY": "3054dc60-1df1-480c-a08f-6e543a8dcaf0"
      }
    })
  }


}
