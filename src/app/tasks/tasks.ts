import { Component, Output, Input, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
@Input({required:true}) userId!: string;
@Input({required:true}) name: string | undefined;
tasks = dummyTasks;

get selectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.userId);
}
}