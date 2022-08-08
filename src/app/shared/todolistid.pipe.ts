import {Pipe} from "@angular/core";
import {ITask} from "../components/task/task.component";

@Pipe({
  name: 'todolistIdPipe'
})
export class TodolistIdPipe {
  transform(tasks: ITask[], todolistId: string): ITask[]{
    return tasks.filter(f => f.todoListId === todolistId)

  }
}
