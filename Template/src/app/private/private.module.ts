import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtBearerInterceptor } from '../interceptors/jwt-bearer.interceptor';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    //TemplateModule,
    PrivateRoutingModule,
    ToolbarModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtBearerInterceptor,
      multi: true
    }
  ]
})
export class PrivateModule { }
