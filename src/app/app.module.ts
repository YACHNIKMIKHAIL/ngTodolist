import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import { TaskComponent } from './components/task/task.component';
import {TodolistIdPipe} from "./shared/todolistid.pipe";
import {AddTodolistComponent} from "./components/add-todolist/add-todolist.component";
import { AddTaskComponent } from './components/add-task/add-task.component';
import {AppCreateTaskComponent} from "./components/add-task/app-create-task/app-create-task.component";
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodolistFilterPipe} from "./shared/todolistfilter.pipe";
import { EditTextComponent } from './components/edit-text/edit-text.component';
import {HttpClientModule} from "@angular/common/http";
import {TitlePipe} from "./shared/title.pipe";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodolistComponent,
    TaskComponent,
    TodolistIdPipe,
    TodolistFilterPipe,
    AddTodolistComponent,
    AddTaskComponent,
    AppCreateTaskComponent,
    LoginComponent,
    MainComponent,
    NotFoundComponent,
    EditTextComponent,
    TitlePipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
