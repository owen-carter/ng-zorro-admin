import {Component, OnInit} from '@angular/core';
import {ECharts} from 'echarts';
@Component({
    selector: 'nz-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.less']
})
export class LogComponent implements OnInit {
    _ERROR = 70;
    _WARN = 7;
    _FATAL = 66;

    _formatLOG = percent => `${percent} %`;


    constructor() {
    }

    ngOnInit() {
        console.dir(ECharts);
    }


}
