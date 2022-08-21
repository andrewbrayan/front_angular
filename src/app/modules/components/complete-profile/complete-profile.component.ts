import { Component, OnInit } from '@angular/core';
import { ChatAPIService } from '@shared/services/chat-api.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {


  constructor(private chatApiService: ChatAPIService) {}

  ngOnInit() {
  }

  uploadAvatar($event: any) {
    const file: File = $event.target.files[0];
    console.log(file);
    if (file.size <= 2100000) {
      this.chatApiService.uploadAvatar(file).subscribe(res => {
        console.log(res);
      } );
    }
  }

}
