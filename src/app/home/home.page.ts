import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  form: FormGroup;
  status = {
    data: null,
    loading: null,
    error: null
  };
  id: any = 'no';

  constructor(private router: Router) {
    this.form = new FormGroup({
      user: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    if (localStorage.getItem('isLoggedin')) {
       this.router.navigate(['/login/home']);
    }
    this.status.data = false;
    this.status.loading = false;
    this.status.error = false;

  }
  login(values) {
    console.log(values);
    this.status.data = false;
    this.status.loading = true;
    this.status.error = false;
    setTimeout(() => {
      // if (values.user === 'test@gmail.com' && values.password === '123') {
      //   this.status.loading = false;
      //   this.status.data = true;
      //   localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/login/home']);
      // } else {
      //   this.status.loading = false;
      //   this.status.error = true;
      // }
    }, 3000);
  }

}
