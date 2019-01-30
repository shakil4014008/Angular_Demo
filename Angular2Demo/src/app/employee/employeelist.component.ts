import { Component } from '@angular/core'

@Component({
    selector: 'listEmployee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})




export class EmployeeListComponent {

    employees: any[] = [
        {code: 'emp101', name:'Tom', gender:'Male', annualSalary:5500, dateofbirth: '25/6/1988'}, 
        { code: 'emp102', name: 'Uom', gender: 'Male', annualSalary: 5500, dateofbirth: '25/6/1988'}, 
        { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '25/6/1988'}, 
        { code: 'emp104', name: 'Xom', gender: 'Male', annualSalary: 5500, dateofbirth: '25/6/1988'} 
    ]
}