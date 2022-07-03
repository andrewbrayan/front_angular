import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  bubblePosition: string = '';
  constructor() { }

  ngOnInit(): void {
    this.bubblePosition = 'right-bubble';
  }

}
