import {Pipe} from "@angular/core";
import {ITask} from "../services/task.service";
import {IFilter} from "../components/todolist/todolist.component";

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
