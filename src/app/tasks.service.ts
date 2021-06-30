import { Injectable } from '@angular/core';
import { TaskGroup } from './task-group';
import { UserTask } from './user-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskGroups: Array<TaskGroup>
  constructor() { 
    let taskA = new TaskGroup("Group A");
    let taskB = new TaskGroup("Group B");
    let taskC = new TaskGroup("Group C");
    taskA.userTasks.push(new UserTask("Task 1", new Date(), 1, "New"));
    taskA.userTasks.push(new UserTask("Task 2", new Date(), 1, "New"));
    taskA.userTasks.push(new UserTask("Task 3", new Date(), 1, "In progrees"));
    taskC.userTasks.push(new UserTask("Task 4", new Date(), 1, "New"));
    this.taskGroups = [taskB, taskA, taskC]; 
  }

  getTaskGroups(){
    return this.taskGroups;
  }
  addTaskGroup(taskGroup: TaskGroup){
    this.taskGroups.push(taskGroup);
  }
  removeTaskGroup(taskGroup: TaskGroup){
    let index = this.taskGroups.indexOf(taskGroup);
    if(index>=0) this.taskGroups.splice(index,1);
  }
  getTaskGroup(taskID: any){
    return this.taskGroups.filter(task => task.id == taskID)[0];
  }
  addUserTask(taskGroup: TaskGroup, userTask: UserTask){
    taskGroup.userTasks.push(userTask);
  }
  updateTask(taskGroup: TaskGroup){
    let index = this.taskGroups.indexOf(taskGroup);
    this.taskGroups[index]=taskGroup;
  }
  deleteUserTask(taskGroup: TaskGroup, userTask: UserTask){
    let groupIndex = this.taskGroups.indexOf(taskGroup);
    let userTaskIndex = this.taskGroups[groupIndex].userTasks.indexOf(userTask);
    this.taskGroups[groupIndex].userTasks.splice(userTaskIndex,1);
  }

}
