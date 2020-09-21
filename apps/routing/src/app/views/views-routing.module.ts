import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewshomeComponent } from './viewshome/viewshome.component';

const routes: Routes = [{
  path:'',component:ViewshomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

