import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'nz-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.less']
})
export class AuditComponent implements OnInit {

    auditList = [];

    constructor() {

    }

    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this.auditList.push({
                'key': i,
                'name': `Edward King ${i}`,
                'age': 32,
                'address': `London, Park Lane no. ${i}`,
            });
        }
    }
}





