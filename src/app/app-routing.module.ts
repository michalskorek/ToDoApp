import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskGroupDetailsComponent } from './task-group-details/task-group-details.component';
import { TaskGroupsComponent } from './task-groups/task-groups.component';

const routes: Routes = [
{ path: '', redirectTo: 'groups', pathMatch: 'full' },
{ path: 'groups', component: TaskGroupsComponent },
{ path: 'groups/:id/details', component: TaskGroupDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
