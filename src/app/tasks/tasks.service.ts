import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { type NewTaskType } from "./new-task/new-task.model";
import { TaskType } from "./task/taskType.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private tasks = dummyTasks;

  getTasksByUserId(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

    addTask(taskData: NewTaskType, userId: string): void {
          const newTask: TaskType = {
            id: Math.random().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
          };
        
          this.tasks.push(newTask);
    }

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}