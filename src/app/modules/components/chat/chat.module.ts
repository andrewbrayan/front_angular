import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// * import the components
import { ChatComponent } from './chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';
// * import the custom modules
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatFooterComponent, ChatBubbleComponent],
  imports: [
    CommonModule,
    AvatarModule,
    MenuModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    CardModule
  ],
  exports: [ChatComponent],
})
export class ChatModule {}
