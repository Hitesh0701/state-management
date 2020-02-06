import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageFromParent: string;
  @Output() messageForParent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendToParent(message: string){
    this.messageForParent.emit(message)
  }
}
