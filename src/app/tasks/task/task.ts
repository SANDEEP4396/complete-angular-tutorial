import { Component, EventEmitter, Input,inject, Output } from '@angular/core';
import { TaskType } from './taskType.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  @Output() completeTask = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
    this.completeTask.emit(this.task.id);
  }
}
