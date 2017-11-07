import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'nz-license',
    templateUrl: './license.component.html',
    styleUrls: ['./license.component.less']
})
export class LicenseComponent implements OnInit {

    status: string;
    inputValue: string;
    seriesNumber: string;

    constructor() {
    }

    ngOnInit() {
        this.status = 'normal';
        this.seriesNumber = 'ab587e1e-6f7a-11e7-8dd6-f07959e0b919';
        this.inputValue = '';
    }

}
