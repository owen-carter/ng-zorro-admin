import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'nz-backup',
    templateUrl: './backup.component.html',
    styleUrls: ['./backup.component.less']
})
export class BackupComponent implements OnInit {

    historyList = [];

    constructor() {

    }

    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this.historyList.push({
                'key': i,
                'name': `Edward King ${i}`,
                'age': 32,
                'address': `London, Park Lane no. ${i}`,
            });
        }
    }


}
