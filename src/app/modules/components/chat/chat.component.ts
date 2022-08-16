import { Component, OnInit } from '@angular/core';
import { ChatAPIService } from '@shared/services/chat-api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatAPIService: ChatAPIService) { }

  ngOnInit(): void {
    this.chatAPIService.getChats().subscribe(chats => {
      console.log(chats);
    });
  }

}
