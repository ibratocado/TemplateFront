import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './componets/public/session/session.component';

const routes: Routes = [
  {path: "Login", component: SessionComponent, pathMatch: 'full'},
  {path: 'Private',loadChildren: () => import('./private/private.module').
                                  then(n => n.PrivateModule)},
];

@NgModule({
  //Para redireccionar a la ruta base use usehash true
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
