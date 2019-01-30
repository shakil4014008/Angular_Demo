import { Component } from '@angular/core'

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html' 
})

export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    colspan: number = 2;

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}