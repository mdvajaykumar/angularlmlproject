import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingModel } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './bedBooking.component.html',
  providers: [BookingService],
})
export class BookingComponent implements OnInit {
  formValue!: FormGroup;
  userModel: BookingModel = new BookingModel();
  userData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      age: [''],
      beds: [''],
      mobile: [''],
    });
  }

  postBookingDetails() {
    this.userModel.name = this.formValue.value.name;
    this.userModel.age = this.formValue.value.age;
    this.userModel.beds = this.formValue.value.beds;
    this.userModel.mobile = this.formValue.value.mobile;

    this.bookingService.createBooking(this.userModel).subscribe(
      (res) => {
        console.log(res);
        alert('Booking Created');
        this.formValue.reset();
        this.getAllBookings();
        this.router.navigate(['/hospitalList']);
      },
      (err) => {
        alert('something Went Wrong');
      }
    );
  }
  getAllBookings() {
    this.bookingService.getAllBookings().subscribe((res) => {
      this.userData = res;
    });
  }

  deleteUser(row: any) {
    this.bookingService.deleteBooking(row.id).subscribe((res) => {
      alert('User Deleted');
      this.getAllBookings();
    });
  }
}
