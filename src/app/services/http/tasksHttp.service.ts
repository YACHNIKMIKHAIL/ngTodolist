import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseType} from "./todolistsHttp.service";
import {baseUrl, httpOptions} from "./logAuthHttp.service";

export type UpdateTaskType = {
  title: string
  description: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
}

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

export interface ITask {
  id: string,
  title: string,
  description?: string,
  todoListId: string,
  order?: number,
  status: TaskStatuses | boolean,
  priority?: TaskPriorities,
  startDate?: string,
  deadline?: string,
  addedDate?: string
  loading?: boolean
}

export type ApiTaskType = {
  items: Array<ITask>
  totalCount: number
  error: string | null
}

@Injectable({
  providedIn: 'root'
})
export class SamuraiServiceTasks {
  constructor(private http: HttpClient) {
  }

  fetchTasks(todolistID: string): Observable<ApiTaskType> {
    return this.http.get<ApiTaskType>(`${baseUrl}/todo-lists/${todolistID}/tasks`, httpOptions)
  }

  addNewTask(title: string, currentId: string): Observable<ResponseType<{ item: ITask }>> {
    return this.http.post<ResponseType<{ item: ITask }>>(`${baseUrl}/todo-lists/${currentId}/tasks`, {title}, httpOptions)
  }

  deleteTask(todolistId: string, taskId: string): Observable<ResponseType> {
    return this.http.delete<ResponseType<{ item: ITask }>>(`${baseUrl}/todo-lists/${todolistId}/tasks/${taskId}`, httpOptions)
  }

  changeTask(todolistID: string, taskID: string, model: UpdateTaskType): Observable<ResponseType<{ item: ITask }>> {
    return this.http.put<ResponseType<{ item: ITask }>>(`${baseUrl}/todo-lists/${todolistID}/tasks/${taskID}`, model, httpOptions)
  }
}
