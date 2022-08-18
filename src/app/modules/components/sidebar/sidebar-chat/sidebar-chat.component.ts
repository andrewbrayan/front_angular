import { Component, Input, OnInit } from '@angular/core';
import { ChatModel } from '@shared/models/models';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
  styleUrls: ['./sidebar-chat.component.scss']
})
export class SidebarChatComponent implements OnInit {
  @Input() chat: ChatModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
