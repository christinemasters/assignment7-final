import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent, // declare the component(s) we're going to use
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent], // designate the component to load first
})
export class AppModule {}
