import {Injectable} from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentId: string = ''

  tasks: ITask[] = [
    {
      id: '1',
      title: 'title 1',
      todoListId: '1659959584487',
      status: true,
    },
    {
      id: '2',
      title: 'title 2',
      todoListId: '1659959584487',
      status: false,
    },
    {
      id: '3',
      title: 'title 3',
      todoListId: '1659959584487',
      status: true,
    },
    {
      id: '4',
      title: 'title 4',
      todoListId: '1659959584487',
      status: true,
    },
    {
      id: '5',
      title: 'title 5',
      todoListId: '1659959538696',
      status: false,
    },
    {
      id: '6',
      title: 'title 6',
      todoListId: '1659959538696',
      status: false,
    },
    {
      id: '7',
      title: 'title 7',
      todoListId: '1659959584487',
      status: true
    },
    {
      id: '8',
      title: 'title 8',
      todoListId: '1659959538696',
      status: true,
    },
    {
      id: '9',
      title: 'title 9',
      todoListId: '1659959538696',
      status: false,
    },
    {
      id: '10',
      title: 'title 10',
      todoListId: '1659959584488',
      status: false,
    },

    {
      id: '11',
      title: 'title 11',
      todoListId: '1659959584488',
      status: true,
    },
    {
      id: '12',
      title: 'title 12',
      todoListId: '1659959538699',
      status: true,
    }
  ]

  constructor() {
  }

  openModal(todolistId: string) {
    this.currentId = todolistId
  }

  addNewTask(title: string): void {
    this.tasks = [...this.tasks, {
      id: (this.tasks.length + 1).toString(),
      title: title,
      todoListId: this.currentId,
      status: false,
    }]
  }

  deleteTask(todolistId: string, taskId: string): void {
    this.tasks = this.tasks.filter(f => f.id !== taskId)
  }

  deleteTodolist(todolistId: string) {
    this.tasks = this.tasks.filter(f => f.todoListId !== todolistId)
  }

  changeStatus(taskId: string, todolistId: string) {
    this.tasks = this.tasks.map(m => m.id === taskId ? {...m, status: !m.status} : m)
  }

  changeTaskTitle(title: string, todolistId: string, taskId: string) {
    this.tasks = this.tasks.map(t => t.id === taskId ? {...t, title} : t)
  }
}
