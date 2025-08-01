import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './taskType.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  @Output() completeTask = new EventEmitter<string>();
  
  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
