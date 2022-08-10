import {Component, Injectable, OnInit} from '@angular/core';
import {TodolistService} from "../../services/todolist.service";

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
  newTodolistTitle: string = ''

  constructor(public todolistService: TodolistService) {
  }

  ngOnInit(): void {
  }

  addTodolist() {
    this.todolistService.addNewTodolist(this.newTodolistTitle).subscribe(res => this.todolistService.addNew(res.data.item))
  }

  onBlurHandler() {
    if (this.newTodolistTitle.trim() === '') return
    alert(`You lose ${this.newTodolistTitle}`)
    this.newTodolistTitle = ''
  }
}
