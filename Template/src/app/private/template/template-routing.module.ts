import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',component: TemplateComponent,children:[
    {path:'Form',component:FormComponent},
    {path:'List',component:ListComponent},
    {path:'Table',component:TableComponent},
    {path:'',redirectTo:'List',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
