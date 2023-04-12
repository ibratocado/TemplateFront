import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './componets/public/session/session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtBearerInterceptor } from './interceptors/jwt-bearer.interceptor';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ], // Se tiene que poner en provedoires el interceptor y el servicio de las cookies
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtBearerInterceptor,
      multi: true },
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
