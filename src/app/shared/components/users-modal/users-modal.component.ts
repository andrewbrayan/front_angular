import { Component, OnInit } from '@angular/core';
import { ItemSearchUserList, UserModel } from '@shared/models/models';
import { ChatAPIService } from '@shared/services/chat-api.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss'],
})
export class UsersModalComponent implements OnInit {
  text: string = '';
  userList: ItemSearchUserList[] = [];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private chatAPIService: ChatAPIService
  ) {}

  ngOnInit(): void {
    this.chatAPIService.getUsers().subscribe((Results: any) => {
      let users: UserModel[] = Results.users;
      users.forEach((user) => {
        let item: ItemSearchUserList = {
          username: user.username,
          name: user.name,
          surname: user.surname,
        };
        this.userList.push(item);
        console.log(this.userList);
      });
    });
  }

  search(event: any) {
    this.userList = this.userList.filter((user) => {
      return (
        user.username.toLowerCase().includes(event.query.toLowerCase()) ||
        user.name.toLowerCase().includes(event.query.toLowerCase()) ||
        user.surname.toLowerCase().includes(event.query.toLowerCase())
      );
    });
  }
}
