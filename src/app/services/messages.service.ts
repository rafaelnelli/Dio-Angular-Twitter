import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessage() {
    return this.messages;
  }

  clearMessage() {
    this.messages = [];
  }

  

  constructor() {}
}
