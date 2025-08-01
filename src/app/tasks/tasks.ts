import { Component, Output, Input, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskType } from './new-task/new-task.model';
import { TaskType } from './task/taskType.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {


@Input({required:true}) userId!: string;
@Input({required:true}) name: string | undefined;
isAddingTaskVisible = false;

tasks = dummyTasks;

get selectedUserTasks() {
  return this.tasks.filter(task => task.userId === this.userId);
}

onCompleteTask(taskId: string) {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}

onAddTask(taskData: NewTaskType) {
  const newTask: TaskType = {
    id: Math.random().toString(),
    userId: this.userId,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.dueDate
  };

  this.tasks.push(newTask);
  this.isAddingTaskVisible = false;
}
onSelectAddTask() {
  this.isAddingTaskVisible = true; 
}
onCancelAddTask() {
  this.isAddingTaskVisible = false; 
}
}