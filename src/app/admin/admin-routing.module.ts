import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // children: [
    //   {
    //     path: 'tab1',
    //     loadChildren: () => import('../user/user.module').then(m => m.UserModule)
    //   },
    //   {
    //     path: 'tab2',
    //     loadChildren: () => import('../acces/acces.module').then(m => m.AccesModule)
    //   },
    //   {
    //     path: 'tabs/tab1',
    //     redirectTo: '',
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
