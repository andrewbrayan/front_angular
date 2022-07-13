import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsersModalComponent } from '@shared/components/users-modal/users-modal.component';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  providers: [DialogService],
})
export class SidebarHeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public dialogService: DialogService) {}

  ngOnInit() {
    this.items = [
      {
        tooltipOptions: {
          tooltipPosition: 'left',
          tooltipLabel: 'New Chat',
        },
        icon: 'pi pi-plus',
        command: () => {
          this.show();
        },
      },
      {
        tooltipOptions: {
          tooltipPosition: 'left',
          tooltipLabel: 'New Group Chat',
        },
        icon: 'pi pi-users',
        command: () => {},
      },
    ];
  }

  show() {
    const ref: DynamicDialogRef = this.dialogService.open(UsersModalComponent, {
      data: {
        id: '51gF3',
      },
      header: 'Choose a User',
      width: '50%',
      height: '50%',
    });
  }
}
