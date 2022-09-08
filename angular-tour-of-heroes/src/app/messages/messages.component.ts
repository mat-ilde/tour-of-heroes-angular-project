import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //messageService is public to allow the acces to the html forms
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}