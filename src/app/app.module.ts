import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import { TaskComponent } from './components/task/task.component';
import {TodolistIdPipe} from "./shared/todolistid.pipe";
import { AddTodolistComponent } from './components/add-todolist/add-todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent,
    TaskComponent,
    TodolistIdPipe,
    AddTodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
