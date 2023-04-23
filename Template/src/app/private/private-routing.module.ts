import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '../componets/private/table/table.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {path:'',component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }