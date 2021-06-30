import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { UserTask } from '../user-task';

@Component({
  selector: 'app-task-group-details',
  templateUrl: './task-group-details.component.html',
  styleUrls: ['./task-group-details.component.css']
})
export class TaskGroupDetailsComponent implements OnInit {

  taskGroup : any;
  constructor(private route: ActivatedRoute,private tasksService: TasksService) { }
  
  updateGroupName(){
    this.tasksService.updateTask(this.taskGroup);
  }
  ngOnInit(): void {
    this.taskGroup = this.getTaskGroup();
  }

  getTaskGroup(){
    const id = this.route.snapshot.paramMap.get("id");
    return this.tasksService.getTaskGroup(id);
    
  }
  deleteTask(userTask: UserTask){
    this.tasksService.deleteUserTask(this.taskGroup, userTask);
  }
}
