import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesViewComponent } from '../componets/private/articles-view/articles-view.component';

const routes: Routes = [
  {path:"Articles", component: ArticlesViewComponent},
  {path:"",redirectTo: "Articles" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
