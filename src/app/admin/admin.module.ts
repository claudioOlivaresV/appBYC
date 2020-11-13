import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from '../user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
