import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesComponent } from './acces.component';

const routes: Routes = [
  {
    path: '',
    component: AccesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesRoutingModule { }
