import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.scss']
})
export class AddTodolistComponent implements OnInit {
  allRights:string='Batman todolist. All rights reserved. 2022'
  constructor() { }

  ngOnInit(): void {
  }

}
