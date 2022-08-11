import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseType} from "./todolist.service";
import {SamuraiServiceTasks, UpdateTaskType} from "./samurai-service-log-auth.service";

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

export type TasksStateType = { [key: string]: ITask[] }
export type ApiTaskType = {
  items: Array<ITask>
  totalCount: number
  error: string | null
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentId: string = ''

  tasks: TasksStateType = {}

  constructor(private http: HttpClient,
              public samuraiServiceTasks: SamuraiServiceTasks) {
  }

  fetchTasks(todolistID: string): Observable<ApiTaskType> {
    return this.samuraiServiceTasks.fetchTasks(todolistID)
  }

  setTasks(todolistId: string, tasks: ITask[]) {
    this.tasks[todolistId] = tasks
  }

  openModal(todolistId: string) {
    this.currentId = todolistId
  }

  addNewTask(title: string): Observable<ResponseType<{ item: ITask }>> {
    return this.samuraiServiceTasks.addNewTask(title, this.currentId)
  }

  addOne(task: ITask) {
    this.tasks[this.currentId].unshift(task)
  }

  deleteTask(todolistId: string, taskId: string): Observable<ResponseType> {
    return this.samuraiServiceTasks.deleteTask(todolistId, taskId)
  }

  deleteOne(todolistId: string, taskId: string) {
    this.tasks[todolistId] = this.tasks[todolistId].filter(f => f.id !== taskId)
  }

  deleteTodolist(todolistId: string) {
    delete this.tasks[todolistId]
  }

  changeTask(todolistID: string, taskID: string, mode: string | boolean): Observable<ResponseType<{ item: ITask }>> {
    const model = this.tasks[todolistID].filter(t => t.id === taskID)[0]
    typeof mode === 'string'
      ? model.title = mode
      : mode
        ? model.status = TaskStatuses.Complited
        : model.status = TaskStatuses.New
    return this.samuraiServiceTasks.changeTask(todolistID, taskID, model as UpdateTaskType)
  }

  changeOne(todolistID: string, taskID: string | undefined, mode: string | boolean) {
    this.tasks[todolistID] = this.tasks[todolistID].map(m => m.id === taskID
      ? typeof mode === 'string'
        ? {...m, title: mode}
        : {...m, status: mode}
      : m)
  }
}
