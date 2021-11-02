import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalModel } from '../../models/hospital.model';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  providers: [HospitalService],
})
export class HospitalComponent implements OnInit {
  formValue!: FormGroup;
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
      city: [''],
      beds: [''],
      icuBeds: [''],
      contact: [''],
    });
    this.getAllHospitals();
    this.formValue = new FormGroup({
      hospitalName: new FormControl(null, Validators.required),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(15),
      ]),
      contact: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      beds: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      icuBeds: new FormControl(null, Validators.required),
    });
  }

  postHospitalDetails() {
    this.hospitalModel.hospitalName = this.formValue.value.hospitalName;
    this.hospitalModel.address = this.formValue.value.address;
    this.hospitalModel.city = this.formValue.value.city;
    this.hospitalModel.beds = this.formValue.value.beds;
    this.hospitalModel.icuBeds = this.formValue.value.icuBeds;
    this.hospitalModel.contact = this.formValue.value.contact;

    this.hospitalService.createHospital(this.hospitalModel).subscribe(
      (res) => {
        console.log(res);
        alert('Hospital Created');
        this.formValue.reset();
        this.getAllHospitals();
        this.router.navigate(['/hospitalList2']);
      },
      (err) => {
        alert('something Went Wrong');
      }
    );
  }
  getAllHospitals() {
    this.hospitalService.getAllHospitals().subscribe((res) => {
      this.hospitalData = res;
    });
  }

  deleteHospital(row: any) {
    this.hospitalService.deleteHosiptal(row.id).subscribe((res) => {
      alert('Hospital Deleted');
      this.getAllHospitals();
    });
  }
  goToBack() {
    this.router.navigate(['/hospitalList2']);
  }
  get hospitalName() {
    return this.formValue.get('hospitalName');
  }
  get address() {
    return this.formValue.get('address');
  }
  get contact() {
    return this.formValue.get('address');
  }
  get beds() {
    return this.formValue.get('beds');
  }
  get city() {
    return this.formValue.get('city');
  }
  get icuBeds() {
    return this.formValue.get('icuBeds');
  }
}
