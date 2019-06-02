import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // 템플릿에 바인딩 되어야 하기 때문에 public으로 선언
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
