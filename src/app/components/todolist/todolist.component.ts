import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {TodolistService} from "../../services/todolist.service";



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {



  constructor(public modalService: ModalService,
              public todolistService: TodolistService) {
  }

  ngOnInit(): void {
  }

}
