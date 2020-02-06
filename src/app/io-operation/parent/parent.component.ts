import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToReceive:string = "";
  messageToSend:any;
  data:any = ['a', 'b', 'c']
  constructor() { }
  
  ngOnInit() {
  }
  sendToChild(message){
    this.messageToSend = message;
  }
  receiveMessage(message){
    this.messageToReceive= message;
  }
}
