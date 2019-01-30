import { Component } from '@angular/core'

@Component({
    selector: 'listEmployee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];
    constructor()
    {
         this.employees= [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Male', annualSalary: 21, dateofbirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' }
        ];
    }

    getEmployees() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Male', annualSalary: 20, dateofbirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' },
            { code: 'emp105', name: 'Zom', gender: 'FeMale', annualSalary: 5500, dateofbirth: '02/6/1999' }
        ];
    }
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}