import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
})
export class SidebarHeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        tooltipOptions: {
          tooltipPosition: 'left',
          tooltipLabel: 'New Chat',
        },
        icon: 'pi pi-plus',
        command: () => {
        },
      },
      {
        tooltipOptions: {
          tooltipPosition: 'left',
          tooltipLabel: 'New Group Chat',
        },
        icon: 'pi pi-users',
        command: () => {
        },
      },
    ];
  }
}
