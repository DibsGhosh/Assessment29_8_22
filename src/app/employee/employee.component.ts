import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm!:FormGroup;

  constructor(private _fb:FormBuilder, private _route:Router) { }

  ngOnInit(): void {

    this.employeeForm = this._fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      gender: [''],
      Dob: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.minLength(6)]],
      employeeType: ['']
    })

  }

  submit(){
    
  }

  routeBack(){
    this._route.navigate(['employee']);
  }

}
