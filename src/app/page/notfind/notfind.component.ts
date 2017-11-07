import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'nz-notfind',
    templateUrl: './notfind.component.html',
    styleUrls: ['./notfind.component.less']
})
export class NotfindComponent implements OnInit {

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



