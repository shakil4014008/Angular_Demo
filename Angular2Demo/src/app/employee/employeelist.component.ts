import { Component, OnInit } from '@angular/core'
import Employee = require("./employee");
import IEmployee = Employee.IEmployee;

import {EmployeeService} from './employee.service';

@Component({
    selector: 'list-Employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]


})
export class EmployeeListComponent implements  OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    constructor(private _employeeService: EmployeeService) { }
   


    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData);
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

 

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}