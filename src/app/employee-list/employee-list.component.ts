import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IEmployee } from '../model/employee.interface';
import { EmployeeService } from '../services/employeeService/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fullName', 'emailId', 'contact', 'Dob', 'address'];
  dataSource:IEmployee[] = [];
  constructor(private _empData:EmployeeService) { 

  }

  ngOnInit(): void {
    let subject= new ReplaySubject(); 
    this._empData.getEmployeeListApi().subscribe((emp) => {
      this.dataSource = emp;
      subject.next(this.dataSource);
      subject.complete();
    })

  }

}
