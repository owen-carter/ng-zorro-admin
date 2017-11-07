import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'nz-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {

    _cpu = 70;
    _men = 7;
    _disk = 66;
    _network = 23;

    _formatCpu = percent => `${percent} %`;
    _formatMen = percent => `${percent} %`;
    _formatDisk = percent => `${percent} %`;
    _formatNetwork = percent => `${percent} kb`;


    constructor() {
    }

    ngOnInit() {
    }

}



