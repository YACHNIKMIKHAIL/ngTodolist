import {Pipe} from "@angular/core";
import {IFilter} from "../components/todolist/todolist.component";
import {ITask} from "../services/http/tasksHttp.service";

@Pipe({
  name: 'todolistFilterPipe'
})
export class TodolistFilterPipe {
  transform(tasks: ITask[], filter: IFilter | undefined): ITask[] {
    if (filter == 'completed') {
      return tasks.filter(f => f.status)
    } else if (filter == 'active') {
      return tasks.filter(f => !f.status)
    }
    return tasks
  }
}
