import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId: string | null = null;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  get selectedUserName() {
    return this.selectedUser ? this.selectedUser.name : '';
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
