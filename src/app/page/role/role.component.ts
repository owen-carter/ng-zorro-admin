import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';


@Component({
    selector: 'nz-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {

    roleList = [];

    constructor() {

    }

    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this.roleList.push({
                'key': i,
                'name': `Edward King ${i}`,
                'age': 32,
                'address': `London, Park Lane no. ${i}`,
            });
        }
    }
}


