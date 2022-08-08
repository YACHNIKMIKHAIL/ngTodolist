import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() title: string = ""

  constructor(public modalService: ModalService) {
  }

  ngOnInit(): void {
  }

}
