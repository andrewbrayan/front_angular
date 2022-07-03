import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// * Import components
import { SidebarComponent } from './sidebar.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarChatComponent } from './sidebar-chat/sidebar-chat.component';
// * Import custom modules
import { AvatarModule } from 'primeng/avatar';
import { SpeedDialModule } from 'primeng/speeddial';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarChatComponent,
  ],
  imports: [
    CommonModule,
    AvatarModule,
    SpeedDialModule,
    RippleModule,
    ToastModule,
    CardModule,
    InputTextModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
