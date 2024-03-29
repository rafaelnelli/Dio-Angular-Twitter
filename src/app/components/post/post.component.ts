import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage:string =""
  tweetMaxLength:number = 240
  tweetRemaining: number = this.tweetMaxLength

  changeTweet(){
    this.tweetRemaining = this.tweetMaxLength - this.tweetMessage.length
  }

  sendTweet(){
    this.service.addMessage(this.tweetMessage)
    this.tweetMessage = ""
    this.tweetRemaining = this.tweetMaxLength    
  }

  constructor(private service: MessagesService){
  }
  
}

  
