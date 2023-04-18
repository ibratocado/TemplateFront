import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './componets/public/session/session.component';

const routes: Routes = [
  {path: "Login",component: SessionComponent},
  {path: "", redirectTo:"Login", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
