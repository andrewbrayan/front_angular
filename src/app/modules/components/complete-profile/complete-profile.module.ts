import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompleteProfileRoutingModule } from './complete-profile-routing.module';
import { CompleteProfileComponent } from './complete-profile.component';

import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    CompleteProfileComponent
  ],
  imports: [
    CommonModule,
    CompleteProfileRoutingModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompleteProfileModule { }
