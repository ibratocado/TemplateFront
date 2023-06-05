import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  //Para componenetes base debemos poner como parde el componente y como hijos los q se routearan dentro
  {path: '',component: PrivateComponent, children:[
    {path: 'Users',loadChildren: () => import('./users/users.module').
                                  then(n => n.UsersModule)},
    {path:'',pathMatch:'full', redirectTo: 'Users'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
