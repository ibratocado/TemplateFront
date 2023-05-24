import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';

import { PublicRoutingModule } from './public-routing.module';
import { SessionComponent } from './session/session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SessionComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ToastModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
  ]
})
export class PublicModule { }
