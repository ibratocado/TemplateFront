import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNG
import { MessageService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './componets/public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrivateModule,
    PublicModule
  ], // Se tiene que poner en provedoires el interceptor y el servicio de las cookies
  providers: [
    CookieService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
