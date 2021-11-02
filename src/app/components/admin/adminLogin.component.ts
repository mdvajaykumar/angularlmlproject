import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminLogin',
  templateUrl: './adminLogin.component.html',
  providers: [],
})
export class AdminLoginComponent {
  username: string = 'MSAIKASI';
  password: string = 'Kasim123$';
  constructor(private router: Router) {}

  getAdminUi() {
    this.router.navigate(['/hospitalList2']);
  }
}
