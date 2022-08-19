import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
  providers: [MessageService],
})
export class CompleteProfileComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 1;

  constructor() {
    this.items = [
        {label: 'Step 1'},
        {label: 'Step 2'},
        {label: 'Step 3'}
    ];
  }


  ngOnInit() {
  }

}
