import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteProfileRoutingModule } from './complete-profile-routing.module';
import { CompleteProfileComponent } from './complete-profile.component';

import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { StepsModule } from 'primeng/steps';

@NgModule({
  declarations: [
    CompleteProfileComponent
  ],
  imports: [
    CommonModule,
    CompleteProfileRoutingModule,
    CardModule,
    AvatarModule,
    StepsModule
  ]
})
export class CompleteProfileModule { }
