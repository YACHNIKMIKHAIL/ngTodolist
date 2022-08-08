import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

export interface ITodolist {
  id: string
  title: string
  addedDate?: string
  order?: number
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todolists: ITodolist[] = [
    {
      id: '1659959584487',
      title: 'git commit',
    },
    {
      id: '1659959538696',
      title: 'git push',
    },


  ]

  constructor(public modalService: ModalService) {
  }

  ngOnInit(): void {
  }

}
