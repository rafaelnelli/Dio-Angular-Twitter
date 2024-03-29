import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { MessagesService } from './services/messages.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    TweetComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
