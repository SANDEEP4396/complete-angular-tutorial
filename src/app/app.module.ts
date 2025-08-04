import { NgModule } from '@angular/core';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Card } from './shared/card/card';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';

@NgModule({
  declarations: [App, Header, User, Card, Tasks, Task, NewTask],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
