import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
@Output() addTask = new EventEmitter<NewTaskType>()
  //Using signals to manage form state, they are reactive and can be used to track changes in the form inputs.
  //but it cannot be used to update the form inputs directly in the template.
  //So it not recommened to use two-way data binding with signals
  //   enteredTitle = signal('');

  //Below is the traditional way of using two-way data binding with ngModel
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onCreateTask() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };

    // Emit the new task to the parent component or handle it as needed
    console.log('New Task Created:', newTask);
    this.addTask.emit(newTask);
    // Reset form fields after creation
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDueDate = '';
  }
}
