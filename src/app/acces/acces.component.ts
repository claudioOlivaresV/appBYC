import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acces',
  templateUrl: './acces.component.html',
  styleUrls: ['./acces.component.scss'],
})
export class AccesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToMain(){
    this.router.navigate(['/main']);

  }

}
