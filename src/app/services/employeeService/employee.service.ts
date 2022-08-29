import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "src/app/model/employee.interface";



@Injectable()

export class EmployeeService{
    
    employeeUrl = 'api/EmployeeList'

    constructor(private _http:HttpClient){

    }
    getEmployeeListApi(): Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>(this.employeeUrl);
    }
}