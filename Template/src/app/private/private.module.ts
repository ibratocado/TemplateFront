import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { TableComponent } from '../componets/private/table/table.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtBearerInterceptor } from '../interceptors/jwt-bearer.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


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
    ToolbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtBearerInterceptor,
      multi: true },
    CookieService,
    MessageService]
})
export class PrivateModule { }
