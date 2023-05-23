import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  //Para componenetes base debemos poner como parde el componente y como hijos los q se routearan dentro
  {path: '',component: PrivateComponent, children:[
    {path: 'Template',loadChildren: () => import('./template/template.module').
                                  then(n => n.TemplateModule)},
    {path:'',pathMatch:'full', redirectTo: 'Template'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
