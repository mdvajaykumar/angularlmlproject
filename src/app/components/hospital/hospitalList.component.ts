import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalModel } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-hospitalList',
  templateUrl: './hospitalList.component.html',
  providers: [HospitalService],
})
export class HospitalListComponent implements OnInit {
  formValue!: FormGroup;
  city: string = '';
  hospitalModel: HospitalModel = new HospitalModel();
  hospitalData!: any;

  constructor(
    private formbuilder: FormBuilder,
    private hospitalService: HospitalService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      hospitalName: [''],
      address: [''],
      beds: [''],
      icuBeds: [''],
      contact: [''],
    });
    this.getAllHospitals();
  }

  getAllHospitals() {
    this.hospitalService.getAllHospitals().subscribe((res) => {
      this.hospitalData = res;
    });
  }

  getHospitals(): void {
    console.log(this.city);
    this.hospitalService.getHospitalByCity(this.city).subscribe((res) => {
      this.hospitalData = res;
    });
  }

  getHospitalDetails(row: any) {
    this.hospitalService.getHospitalById(row.id).subscribe((res) => {
      alert(
        `{Id: ${row.id} \n Hospital Name: ${row.hospitalName} \n Address: ${row.address} \n Beds: ${row.beds}}`
      );
    });
  }

  deleteHospital(row: any) {
    this.hospitalService.deleteHosiptal(row.id).subscribe((res) => {
      alert('Hospital Deleted');
      this.getAllHospitals();
    });
  }

  onEdit(row: any) {
    this.hospitalModel.id = row.id;
    this.formValue.controls['hospitalName'].setValue(row.hospitalName);
    this.formValue.controls['address'].setValue(row.address);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['beds'].setValue(row.beds);
    this.formValue.controls['icuBeds'].setValue(row.icuBeds);
    this.formValue.controls['contact'].setValue(row.contact);
  }

  updateHospitalDetails() {
    this.hospitalModel.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModel.address = this.formValue.value.address;
    this.hospitalModel.city = this.formValue.value.city;
    this.hospitalModel.beds = this.formValue.value.beds;
    this.hospitalModel.icuBeds = this.formValue.value.icuBeds;
    this.hospitalModel.contact = this.formValue.value.contact;

    this.hospitalService
      .updateHospital(this.hospitalModel, this.hospitalModel.id)
      .subscribe((res) => {
        alert('User Details Updated');

        this.formValue.reset();
        this.getAllHospitals();
      });
  }
  getBed() {
    this.router.navigate(['/booking']);
  }
}
