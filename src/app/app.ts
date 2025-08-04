import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
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
