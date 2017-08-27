import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'nz-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {
    user = {};
    _id = '';


    constructor(private userService: UserService, private _message: NzMessageService) {
    }


    ngOnInit() {
    }


    createUser(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.userService.create(name)
            .then(hero => {
                this.user = null;
            });
    }

    queryUser(id: string): void {
        this.userService.query(id)
            .then(response => {
                this.user = null;
            });
    }
}
