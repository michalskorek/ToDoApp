import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskGroup } from '../task-group';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-groups',
  templateUrl: './task-groups.component.html',
  styleUrls: ['./task-groups.component.css']
})
export class TaskGroupsComponent implements OnInit {
  sortedByName = false;
  sortedByNumber = false;
  taskGroups: Array<TaskGroup>
  newGroupName = "";
  constructor(private tasksService: TasksService, private router: Router) { 
    this.taskGroups = this.tasksService.getTaskGroups();
  }

  addGroup(){
    let newGroup = new TaskGroup(this.newGroupName);
    this.tasksService.addTaskGroup(newGroup);
    this.taskGroups = this.tasksService.getTaskGroups();
    this.sortedByName = false;
    this.sortedByNumber = false;
    this.router.navigate(['groups/'+newGroup.id+"/details"]);
  }

  deleteGroup(taskGroup:TaskGroup){
    this.tasksService.removeTaskGroup(taskGroup);
  }
  sortByNumber(){
    if(!this.sortedByNumber){
      this.taskGroups.sort((a,b) => a.userTasks.length - b.userTasks.length);
      this.sortedByNumber = true;
      this.sortedByName = false;
    }
    else this.taskGroups.reverse();
  }
  sortByName(){
    if(!this.sortedByName){
      this.taskGroups.sort((a,b) => a.name.localeCompare(b.name));
      this.sortedByName = true;
      this.sortedByNumber = false;
    }
    else this.taskGroups.reverse();

  }

  ngOnInit(): void {
  }

}
