import { Component, Output, Input, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskType } from './new-task/new-task.model';
import { TaskType } from './task/taskType.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;
  isAddingTaskVisible = false;
  //private tasksService: TasksService;
  //With using private tasksService, we can access the methods of TasksService directly in this class.
  //This is a common pattern in Angular to inject services into components.
  constructor(private tasksService: TasksService) {
    
    //this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  // onCompleteTask(taskId: string) {
  //   this.tasksService.removeTask(taskId);
  // }

  // onAddTask(taskData: NewTaskType) {
  //   this.tasksService.addTask(taskData, this.userId);
  //   this.isAddingTaskVisible = false;
  // }

  onSelectAddTask() {
    this.isAddingTaskVisible = true;
  }

  onCloseAddTask() {
    this.isAddingTaskVisible = false;
  }
}
