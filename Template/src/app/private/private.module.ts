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
import {DataViewModule} from 'primeng/dataview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';


import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { TableComponent } from '../componets/private/table/table.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtBearerInterceptor } from '../interceptors/jwt-bearer.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlesViewComponent } from '../componets/private/articles-view/articles-view.component';
import { DialogAddArticleComponent } from '../componets/dialogs/dialog-add-article/dialog-add-article.component';
import { DialogUpdateArticleComponent } from '../componets/dialogs/dialog-update-article/dialog-update-article.component';
import { ToolbarComponent } from '../componets/private/toolbar/toolbar.component';
import { DialogAddCustomerComponent } from '../componets/dialogs/dialog-add-customer/dialog-add-customer.component';
import { DialogUpdateCustomerComponent } from '../componets/dialogs/dialog-update-customer/dialog-update-customer.component';
import { DialogAddStoreComponent } from '../componets/dialogs/dialog-add-store/dialog-add-store.component';
import { DialogUpdateStoreComponent } from '../componets/dialogs/dialog-update-store/dialog-update-store.component';
import { CustomersViewComponent } from '../componets/private/customers-view/customers-view.component';
import { StoresViewComponent } from '../componets/private/stores-view/stores-view.component';
import { ArticlesAdminViewComponent } from '../componets/private/articles-admin-view/articles-admin-view.component';
import { DialogAddStoreArticleComponent } from '../componets/dialogs/dialog-add-store-article/dialog-add-store-article.component';


@NgModule({
  declarations: [
    PrivateComponent,
    TableComponent,
    ArticlesViewComponent,
    ToolbarComponent,
    DialogAddArticleComponent,
    DialogUpdateArticleComponent,
    CustomersViewComponent,
    StoresViewComponent,
    ArticlesAdminViewComponent,
    DialogAddStoreArticleComponent
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
    DataViewModule,
    DynamicDialogModule,
    AutoCompleteModule,
    FormsModule,
    FileUploadModule,
    InputMaskModule,
    ConfirmPopupModule,
    BadgeModule
  ],
  entryComponents: [
    DialogAddArticleComponent,
    DialogUpdateArticleComponent,
    DialogAddCustomerComponent,
    DialogUpdateCustomerComponent,
    DialogAddStoreComponent,
    DialogUpdateStoreComponent,
    DialogAddStoreArticleComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtBearerInterceptor,
      multi: true },
    CookieService,
    ConfirmationService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig]
})
export class PrivateModule { }
