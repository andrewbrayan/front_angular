import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { registerUser } from '@modules/ngrx/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  blockSpecial: RegExp = /^[^<>*!]+$/;
  registerForm: FormGroup;

  constructor(private store: Store) {
    this.registerForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  ngOnInit(): void {}

  register() {
    let password = this.registerForm.controls['password'];
    let confirmPassword = this.registerForm.controls['confirmPassword'];
    if (password.value === confirmPassword.value) {
      let userData = {
        ... this.registerForm.value
      };
      delete userData.confirmPassword;
      this.store.dispatch(registerUser({ credentials: userData }));
    } else {
      console.log(this.registerForm.controls['confirmPassword']);
      this.registerForm.controls['confirmPassword'].setErrors({
        notMatch: true,
      });
    }
  }
}
