import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './guards/session.guard';
import { LogginGuard } from './guards/loggin.guard';

const routes: Routes = [
  {path: 'Public',canActivate: [LogginGuard],loadChildren: () => import('./componets/public/public.module').
                                  then(n => n.PublicModule)},
  {path:'',redirectTo:'Public',pathMatch:'full'},
  {path: 'Private',canActivate: [SessionGuard],loadChildren: () => import('./private/private.module').
                                  then(n => n.PrivateModule)},
];

@NgModule({
  //Para redireccionar a la ruta base use usehash true
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
