import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss']
})
export class EditTextComponent implements OnInit {
  textX: string = 'cergvwragva'
  @Input() text: string | undefined
  isVisible: boolean = false

  constructor() {

  }

  ngOnInit(): void {
    if (this.text) this.textX = this.text
  }

  open() {
    this.isVisible = true
  }

  close() {
    this.isVisible = false
  }

}
