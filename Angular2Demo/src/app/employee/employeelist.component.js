"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { code: 'emp101', name: 'zom', gender: 'Female', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Female', annualSalary: 21, dateofbirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Female', annualSalary: 5500, dateofbirth: '02/6/1988' }
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { code: 'emp101', name: 'zom', gender: 'Female', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Male', annualSalary: 20, dateofbirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateofbirth: '01/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Male', annualSalary: 5500, dateofbirth: '02/6/1988' },
            { code: 'emp105', name: 'Zom', gender: 'Female', annualSalary: 5500, dateofbirth: '02/6/1999' }
        ];
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'listEmployee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map