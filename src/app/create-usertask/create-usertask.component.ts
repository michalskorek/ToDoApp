import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { UserTask } from '../user-task';

@Component({
  selector: 'app-create-usertask',
  templateUrl: './create-usertask.component.html',
  styleUrls: ['./create-usertask.component.css']
})
export class CreateUsertaskComponent implements OnInit {
  @Input() taskGroup: any;
  userTaskForm: FormGroup;
  options = ["new", "in progress", "completed"];

  constructor(private formBuilder: FormBuilder, private tasksService: TasksService) { 
    this.userTaskForm = this.formBuilder.group({
      name: '',
      deadLine: '',
      status: '',
      user: ''
    });
  }


  onSubmit(){
    let credentials = this.userTaskForm.value;
    let newUserTask = new UserTask(credentials.name, credentials.deadLine, credentials.user, credentials.status);
    this.tasksService.addUserTask(this.taskGroup, newUserTask);
    this.userTaskForm.reset();
    
  }
  ngOnInit(): void {

  }

}
