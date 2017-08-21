import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'app';
    isCollapsed = false;
    _dataSet = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this._dataSet.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
    }

    nzCollapseChange() {
        console.warn('2323')
    }
}
