import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// * Import components
import { SidebarComponent } from './sidebar.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarChatComponent } from './sidebar-chat/sidebar-chat.component';
import { UsersModalComponent } from '@shared/components/users-modal/users-modal.component';
// * Import custom modules
import { AvatarModule } from 'primeng/avatar';
import { SpeedDialModule } from 'primeng/speeddial';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    SpeedDialModule,
    RippleModule,
    ToastModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule,
    AutoCompleteModule,
  ],
  declarations: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarChatComponent,
    UsersModalComponent,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
