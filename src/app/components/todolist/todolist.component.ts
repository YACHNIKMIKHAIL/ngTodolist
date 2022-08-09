import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {TodolistService} from "../../services/todolist.service";
import {TaskService} from "../../services/task.service";



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {



  constructor(public modalService: ModalService,
              public todolistService: TodolistService,
              public taskService: TaskService) {
  }

  ngOnInit(): void {
  }

}
