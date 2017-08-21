import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'nz-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

    userList = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this.userList.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
    }

}
