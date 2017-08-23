import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'nz-upgrade',
    templateUrl: './upgrade.component.html',
    styleUrls: ['./upgrade.component.less']
})
export class UpgradeComponent implements OnInit {

    inputValue: string;
    seriesNumber: string;

    constructor() {
    }

    ngOnInit() {
        this.seriesNumber = 'ab587e1e-6f7a-11e7-8dd6-f07959e0b919';
    }

}
