import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/userList.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HospitalListComponent } from './components/hospital/hospitalList.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HospitalList2Component } from './components/hospital/hospitalList2.component';
import { AdminLoginComponent } from './components/admin/adminLogin.component';
import { BookingComponent } from './components/hospital/bookings/bedBooking.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    UserComponent,
    UserListComponent,
    HospitalComponent,
    HospitalListComponent,
    HomeComponent,
    LoginComponent,
    HospitalList2Component,
    AdminLoginComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
