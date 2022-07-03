import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// * Import components
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// * Import custom modules
import { SidebarModule } from '@modules/components/sidebar/sidebar.module';
import { ChatModule } from '@modules/components/chat/chat.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SidebarModule, ChatModule],
  providers: [],
})
export class HomeModule {}
