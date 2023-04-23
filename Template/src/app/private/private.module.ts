import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { TableComponent } from '../componets/private/table/table.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtBearerInterceptor } from '../interceptors/jwt-bearer.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../componets/private/form/form.component';


@NgModule({
  declarations: [
    PrivateComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    ToastModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    DynamicDialogModule
  ],
  entryComponents:[FormComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtBearerInterceptor,
      multi: true },
    CookieService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig]
})
export class PrivateModule { }
