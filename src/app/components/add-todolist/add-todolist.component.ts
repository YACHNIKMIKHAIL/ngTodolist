import {Component, Injectable, OnInit} from '@angular/core';
import {TodolistService} from "../../services/todolist.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AddTodolistComponent implements OnInit {
  allRights: string = 'Batman todolist. All rights reserved. 2022'
  newTodolistTitle: string | null = ''

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.minLength(5)
    ])
  })

  constructor(public todolistService: TodolistService,
              private appService: AppService) {
  }

  ngOnInit(): void {
  }

  get title() {
    this.newTodolistTitle = this.form.controls.title.value
    return this.form.controls.title as FormControl
  }

  submit(event: any) {
    event.preventDefault()

    if (this.form.controls.title.errors) return
    if (this.newTodolistTitle) {
      this.appService.setIsLoad(true)
      this.todolistService.addNewTodolist(this.newTodolistTitle)
        .subscribe(res => {
          this.todolistService.addNew(res.data.item)
          this.form.reset()
          this.appService.setIsLoad(false)
        })
    }


  }
}
