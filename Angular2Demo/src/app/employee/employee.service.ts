import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {
    getEmployee(): IEmployee[] {
        return [
            { code: 'emp101', name: 'Shakil', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Female', annualSalary: 21, dateOfBirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateOfBirth: '02/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Female', annualSalary: 5500, dateOfBirth: '02/6/1988' },
            { code: 'emp105', name: 'Zom', gender: 'Female', annualSalary: 5500, dateOfBirth: '02/6/1999' },
            { code: 'emp106', name: 'Jobeda', gender: 'Female', annualSalary: 8800, dateOfBirth: '02/6/1999' }

        ];
    }
}
