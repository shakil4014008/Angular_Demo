﻿import { Component, OnInit } from '@angular/core';
import { IEmployee} from './employee';
import { ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from './employee.service'

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent  implements OnInit{

    employee: IEmployee;
    statusMessage: string ="Loading data. Please wait";

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private  _router: Router) { }

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .then((employeeData) => {
                    if (employeeData == null)
                    {
                            this.statusMessage = "Employee with the specified Employee Code does not exist";
                    }
                    else
                    {
                            this.employee = employeeData;
                    }
            },
                (error) => {
                    this.statusMessage = "Problem  with the service. Please try again after sometime";
                    console.log(error);
                 }
            );


    }
}

