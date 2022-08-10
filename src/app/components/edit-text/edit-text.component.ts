import {Component, Input, OnInit} from '@angular/core';
import {TodolistService} from "../../services/todolist.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss']
})


export class EditTextComponent implements OnInit {
  textX: string = ''
  @Input() text: string | undefined
  @Input() isTodolist: boolean = false
  @Input() todolistId: string = ''
  @Input() taskId: string | undefined
  isVisible: boolean = false

  constructor(private todolistService: TodolistService,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
    if (this.text) this.textX = this.text
  }

  open() {
    this.isVisible = true
  }

  close() {
    this.isVisible = false
    if (this.isTodolist) this.todolistService.changeTodolistTitle(this.textX, this.todolistId)
      .subscribe(res=> {
        res.messages.length===0&&this.todolistService.changeOne(this.textX, this.todolistId)
        console.log(res)
      })
    if (this.taskId) this.taskService.changeTaskTitle(this.textX, this.todolistId, this.taskId)
  }

}
