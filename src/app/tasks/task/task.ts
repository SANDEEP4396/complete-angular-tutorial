import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './taskType.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
