import { Component } from '@angular/core'

@Component({
    selector: 'listEmployee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {
    employees: any[];

    selectedEmployeeCountRadioButton: string = 'All';

    constructor()
    {
         this.employees= [
            { code: 'emp101', name: 'Shakil', gender: 'Male', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Female', annualSalary: 21, dateofbirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' },
             { code: 'emp104', name: 'Xom', gender: 'Female', annualSalary: 5500, dateofbirth: '02/6/1988' },
             { code: 'emp105', name: 'Zom', gender: 'Female', annualSalary: 5500, dateofbirth: '02/6/1999' },
             { code: 'emp106', name: 'Jobeda', gender: 'Female', annualSalary: 8800, dateofbirth: '02/6/1999' }
            
        ];
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