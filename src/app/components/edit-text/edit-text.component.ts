import {Component, Directive, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.scss']
})


export class EditTextComponent implements OnInit {
  textX: string = ''
  @Input() text: string | undefined
  @Input() isTodolist: boolean = false
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
    this.text = this.textX
    this.isVisible = false
  }

}
