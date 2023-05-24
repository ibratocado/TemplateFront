import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from '../template/template.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';


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
    CheckboxModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ToastModule,
    CardModule,
    CalendarModule,
    KeyFilterModule,
    InputTextModule
  ],providers: [
    MessageService
  ]
})
export class TemplateModule { }
