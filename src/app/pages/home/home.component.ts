import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  tweets: string[] = ['base', 'teste'];

  constructor(private service: MessagesService) {}

  ngOnInit(): void {
    this.tweets =this.service.getMessage()
  }
}
