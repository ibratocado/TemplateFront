import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressBarModule} from 'primeng/progressbar';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ConfirmationService} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './componets/public/session/session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PrivateModule } from './private/private.module';
import { DialogShippingCarComponent } from './componets/dialogs/dialog-shipping-car/dialog-shipping-car.component';
import { CustomersArticleViewComponent } from './componets/private/customers-article-view/customers-article-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    ToastModule,
    HttpClientModule,
    PrivateModule,
  ], // Se tiene que poner en provedoires el interceptor y el servicio de las cookies
  providers: [
    CookieService,
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
