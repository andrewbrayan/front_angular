import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatAPIService } from '@shared/services/chat-api.service';

@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {
  updateUserForm: FormGroup;

  constructor(private chatApiService: ChatAPIService) {
    this.updateUserForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
      }),
      surName: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {}

  uploadAvatar($event: any) {
    const file: File = $event.target.files[0];
    if (file.size <= 2100000) {
      const formData = new FormData();
      formData.append('image', file);
      this.chatApiService.uploadAvatar(formData).subscribe((res) => {
        console.log(res);
      }), (err: any) => {
        console.log(err);
      }
    }
  }

  submitForm() {
    const {name, surname} = this.updateUserForm.value;
    console.log(this.updateUserForm.value);

    this.chatApiService.uploadUser({ name, surname }).subscribe((res) => {
      console.log(res);
    }), (err: any) => {
      console.log(err);
    }
  }
}
