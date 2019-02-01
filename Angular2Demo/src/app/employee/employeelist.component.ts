import { Component, OnInit } from '@angular/core'
import Employee = require("./employee");
import IEmployee = Employee.IEmployee;

import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences.service';

@Component({
    selector: 'list-Employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]


})
export class EmployeeListComponent implements  OnInit{
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = "Loading data. Please wait...";

    

    constructor(private _employeeService: EmployeeService,
        private _userPreferencesService: UserPreferencesService) {
         
    }
   


    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe(employeesData => this.employees = employeesData,
                (error) => {
                    this.statusMessage = "Problem with the service. Please try again after sometimes..";
                    console.error(error);
                });
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

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    // Implement a setter to change the colourPreference value
    // of the service
    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
}