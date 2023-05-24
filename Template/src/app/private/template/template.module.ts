import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from '../template/template.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    TemplateComponent,
    FormComponent,
    ListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    TableModule,
    CheckboxModule
  ]
})
export class TemplateModule { }
