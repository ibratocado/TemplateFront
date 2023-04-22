import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './componets/public/session/session.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {path: "Login", component: SessionComponent, pathMatch: 'full'},
  {path: 'Private',canActivate: [SessionGuard],loadChildren: () => import('./private/private.module').
                                  then(n => n.PrivateModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
