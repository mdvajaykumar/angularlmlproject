import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin/adminLogin.component';
//import { AdminComponent } from './components/admin.component';
//import { AdminUiComponent } from './components/AdminUi.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/hospital/bookings/bedBooking.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HospitalListComponent } from './components/hospital/hospitalList.component';
import { HospitalList2Component } from './components/hospital/hospitalList2.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/userList.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'signUp', component: UserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'hospitalList', component: HospitalListComponent },
  { path: 'hospitalList2', component: HospitalList2Component },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
