import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiTaskType, ITask, SamuraiServiceTasks, TaskStatuses, UpdateTaskType} from "./http/tasksHttp.service";


export type TasksStateType = { [key: string]: ITask[] }



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  currentId: string = ''

  tasks: TasksStateType = {}

  constructor(
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

  addNewTask(title: string) {
    return this.samuraiServiceTasks.addNewTask(title, this.currentId)
  }

  addOne(task: ITask) {
    this.tasks[this.currentId].unshift(task)
  }

  deleteTask(todolistId: string, taskId: string){
    return this.samuraiServiceTasks.deleteTask(todolistId, taskId)
  }

  deleteOne(todolistId: string, taskId: string) {
    this.tasks[todolistId] = this.tasks[todolistId].filter(f => f.id !== taskId)
  }

  deleteTodolist(todolistId: string) {
    delete this.tasks[todolistId]
  }

  changeTask(todolistID: string, taskID: string, mode: string | boolean) {
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
