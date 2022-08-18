import { Component, OnInit } from '@angular/core';
import { AppState } from '@modules/ngrx/app.state';
import { selectUserChats } from '@modules/ngrx/selectors/user.selectors';
import { Store } from '@ngrx/store';
import { ChatModel } from '@shared/models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ChatList: Observable<(ChatModel | undefined)[]> = new Observable();

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.ChatList = this.store.select(selectUserChats);
  }
}
