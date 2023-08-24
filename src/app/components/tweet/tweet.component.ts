import { Component, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {  
  @Input() tweetMessage:string =""

  sendTweet(a: string){
    this.tweetMessage = a
  }

  constructor(private service: MessagesService){
  }
}
