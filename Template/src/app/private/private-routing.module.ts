import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesViewComponent } from '../componets/private/articles-view/articles-view.component';
import { StoresViewComponent } from '../componets/private/stores-view/stores-view.component';
import { CustomersViewComponent } from '../componets/private/customers-view/customers-view.component';
import { ArticlesAdminViewComponent } from '../componets/private/articles-admin-view/articles-admin-view.component';
import { CustomersArticleViewComponent } from '../componets/private/customers-article-view/customers-article-view.component';

const routes: Routes = [
  {path:"Articles", component: ArticlesViewComponent},
  {path:"ArticlesAD", component: ArticlesAdminViewComponent},
  {path:"Stores",component: StoresViewComponent},
  {path:"Customers", component: CustomersViewComponent},
  {path:"Orders",component: CustomersArticleViewComponent},
  {path:"",redirectTo: "Articles" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
