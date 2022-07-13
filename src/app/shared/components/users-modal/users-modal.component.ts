import { Component, OnInit } from '@angular/core';
import { UserModel } from '@shared/models/models';
import { ChatAPIService } from '@shared/services/chat-api.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss'],
})
export class UsersModalComponent implements OnInit {
  text: string = '';
  results: String[] = [];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private chatAPIService: ChatAPIService
  ) {}

  ngOnInit(): void {
    this.chatAPIService.getUsers().subscribe((users: UserModel[]) => {
      users.forEach((user) => {
        this.results.push(user.username);
      });
    });
  }

  search(event: any) {
    this.results = this.results.filter((user) => {
      return user.toLowerCase().includes(event.query.toLowerCase());
    });
  }
}
