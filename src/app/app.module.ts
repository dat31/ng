import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule( {
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
