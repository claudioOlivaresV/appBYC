import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalUserComponent } from '../modal-user/modal-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  constructor(private router: Router, public modalController: ModalController) { }

  ngOnInit() {}
  goToMain(){
    this.router.navigate(['/main']);

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalUserComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
