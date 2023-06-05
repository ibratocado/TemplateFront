import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersFormComponent } from './users-form/users-form.component';

const routes: Routes = [
  {path: "Table",component: UsersTableComponent},
  {path: "Add",component:UsersFormComponent},
  {path: '',redirectTo:'Table',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
