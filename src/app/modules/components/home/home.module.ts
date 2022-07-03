import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// * Import components
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// * Import custom modules
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SidebarModule],
  providers: [],
})
export class HomeModule {}
