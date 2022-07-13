import { Component, OnInit } from '@angular/core';
import { ChatAPIService } from '@shared/services/chat-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
