import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  tasks: TasksStateType =
    {
      // ['1659959584487']: [
      //   {
      //     id: '1',
      //     title: 'title 1',
      //     todoListId: '1659959584487',
      //     status: true,
      //   },
      //   {
      //     id: '2',
      //     title: 'title 2',
      //     todoListId: '1659959584487',
      //     status: false,
      //   },
      //   {
      //     id: '3',
      //     title: 'title 3',
      //     todoListId: '1659959584487',
      //     status: true,
      //   },
      //   {
      //     id: '4',
      //     title: 'title 4',
      //     todoListId: '1659959584487',
      //     status: true,
      //   },
      //   {
      //     id: '7',
      //     title: 'title 7',
      //     todoListId: '1659959584487',
      //     status: true
      //   }
      // ],
      //
      // ['1659959538696']: [
      //   {
      //     id: '5',
      //     title: 'title 5',
      //     todoListId: '1659959538696',
      //     status: false,
      //   },
      //   {
      //     id: '6',
      //     title: 'title 6',
      //     todoListId: '1659959538696',
      //     status: false,
      //   },
      //   {
      //     id: '8',
      //     title: 'title 8',
      //     todoListId: '1659959538696',
      //     status: true,
      //   },
      //   {
      //     id: '9',
      //     title: 'title 9',
      //     todoListId: '1659959538696',
      //     status: false,
      //   }
      // ]
      // ,
      // ['1659959584488']: [
      //   {
      //     id: '10',
      //     title: 'title 10',
      //     todoListId: '1659959584488',
      //     status: false,
      //   },
      //
      //   {
      //     id: '11',
      //     title: 'title 11',
      //     todoListId: '1659959584488',
      //     status: true,
      //   }
      // ]
      // ,
      // ['1659959538699']: [
      //   {
      //     id: '12',
      //     title: 'title 12',
      //     todoListId: '1659959538699',
      //     status: true,
      //   }
      // ]
    }


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

  setTasks(todolistId: string, tasks: ITask[]) {
    this.tasks[todolistId] = tasks
  }

  openModal(todolistId: string) {
    this.currentId = todolistId
  }

  addNewTask(title: string): void {
    this.tasks[this.currentId].push({
      id: Date.now().toString(),
      title: title,
      todoListId: this.currentId,
      status: false,
    })
  }

  deleteTask(todolistId: string, taskId: string): void {
    this.tasks[todolistId] = this.tasks[todolistId].filter(f => f.id !== taskId)
  }

  deleteTodolist(todolistId: string) {
    delete this.tasks[todolistId]
  }

  changeStatus(taskId: string, todolistId: string) {
    this.tasks[todolistId] = this.tasks[todolistId].map(m => m.id === taskId ? {...m, status: !m.status} : m)
  }

  changeTaskTitle(title: string, todolistId: string, taskId: string) {
    this.tasks[todolistId] = this.tasks[todolistId].map(t => t.id === taskId ? {...t, title} : t)
  }
}
