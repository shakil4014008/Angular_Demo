﻿import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
    selector: 'simple',
    template:`You entered: {{simpleInput}}`
})
export class SimpleComponent {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {

        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            
            console.log(propertyName + ': CV = '
                + current + ', PV =' + previous);
        }

    }
}