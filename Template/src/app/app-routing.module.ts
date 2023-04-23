import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './componets/public/session/session.component';
import { SessionGuard } from './guards/session.guard';
import { CookieGuard } from './guards/cookie.guard';

const routes: Routes = [
  {path: "Login",canActivate: [CookieGuard], component: SessionComponent},
  {path: '',redirectTo:"Login",pathMatch: 'full'},
  {path: 'Private',canActivate: [SessionGuard],loadChildren: () => import('./private/private.module').
                                  then(n => n.PrivateModule)},
];

@NgModule({//se agrega el has para q el servidor identifique uin recarga la ruta base
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
