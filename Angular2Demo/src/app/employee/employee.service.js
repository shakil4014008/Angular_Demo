"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getEmployee = function () {
        return [
            { code: 'emp101', name: 'Shakil', gender: 'Male', annualSalary: 5500, dateOfBirth: '01/6/1988' },
            { code: 'emp102', name: 'Uom', gender: 'Female', annualSalary: 21, dateOfBirth: '01/6/1988' },
            { code: 'emp103', name: 'Wom', gender: 'Male', annualSalary: 5500, dateOfBirth: '02/6/1988' },
            { code: 'emp104', name: 'Xom', gender: 'Female', annualSalary: 5500, dateOfBirth: '02/6/1988' },
            { code: 'emp105', name: 'Zom', gender: 'Female', annualSalary: 5500, dateOfBirth: '02/6/1999' },
            { code: 'emp106', name: 'Jobeda', gender: 'Female', annualSalary: 8800, dateOfBirth: '02/6/1999' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map