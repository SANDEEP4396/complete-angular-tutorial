import { NgModule } from '@angular/core';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [App],
    bootstrap: [App],
    imports: [BrowserModule, FormsModule, Header, User, Tasks]
})
export class AppModule {

}