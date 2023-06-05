import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputMaskModule} from 'primeng/inputmask';
import { UsersDialogUpdateComponent } from './users-dialog-update/users-dialog-update.component';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [
    UsersTableComponent,
    UsersFormComponent,
    UsersDialogUpdateComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TableModule,
    CheckboxModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ToastModule,
    CardModule,
    KeyFilterModule,
    InputTextModule,
    ConfirmPopupModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    InputMaskModule
  ],
  entryComponents: [
    UsersDialogUpdateComponent
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class UsersModule { }
