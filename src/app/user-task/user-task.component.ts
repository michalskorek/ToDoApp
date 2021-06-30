import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserTask } from '../user-task';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent implements OnInit {
  @Input() task :any;
  @Output() deleteEmitter = new EventEmitter<UserTask>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(){
    this.deleteEmitter.emit(this.task);
  }
}
