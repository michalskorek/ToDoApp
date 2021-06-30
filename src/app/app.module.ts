import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskGroupsComponent } from './task-groups/task-groups.component';
import { TaskGroupDetailsComponent } from './task-group-details/task-group-details.component';
import { UserTaskComponent } from './user-task/user-task.component';
import { CreateUsertaskComponent } from './create-usertask/create-usertask.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskGroupsComponent,
    TaskGroupDetailsComponent,
    UserTaskComponent,
    CreateUsertaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
