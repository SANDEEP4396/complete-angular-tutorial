import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from './new-task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})

export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  //Using signals to manage form state, they are reactive and can be used to track changes in the form inputs.
  //but it cannot be used to update the form inputs directly in the template.
  //So it not recommened to use two-way data binding with signals
  //   enteredTitle = signal('');

  //Below is the traditional way of using two-way data binding with ngModel
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onCreateTask() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }

}
