import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesComponent } from '../acces/acces.component';
import { UserComponent } from '../user/user.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
     children: [
      {
        path: 'tab1',
        component: UserComponent
      },
      {
        path: 'tab2',
        component: AccesComponent
      },
      {
        path: 'home/tab1',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
