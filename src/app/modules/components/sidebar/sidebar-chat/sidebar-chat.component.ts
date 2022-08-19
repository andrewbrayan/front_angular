import { Component, Input, OnInit } from '@angular/core';
import { ChatModel } from '@shared/models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
  styleUrls: ['./sidebar-chat.component.scss']
})
export class SidebarChatComponent implements OnInit {
  @Input() chat: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
