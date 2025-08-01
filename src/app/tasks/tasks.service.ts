import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { type NewTaskType } from "./new-task/new-task.model";
import { TaskType } from "./task/taskType.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = dummyTasks;

    constructor() {
        const tasksFromLocalStorage = localStorage.getItem('tasks');
        if (tasksFromLocalStorage) {
            this.tasks = JSON.parse(tasksFromLocalStorage);
        } else {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }   
  getTasksByUserId(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

    addTask(taskData: NewTaskType, userId: string): void {
        const newTask: TaskType = {
            id: 't' + Date.now() + Math.floor(Math.random() * 100),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        };
        
          this.tasks.push(newTask);
          this.saveTasksToLocalStorage();
    }

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasksToLocalStorage();
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}