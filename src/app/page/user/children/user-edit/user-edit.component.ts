import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../service/user.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'nz-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {
    _id = '';
    user = {};

    constructor(private userService: UserService, private _message: NzMessageService, private router: Router, private route: ActivatedRoute) {
        this.route.params.subscribe((params) => {
            console.dir(params);
            this._id = params['id'] || '';
        })
    }


    ngOnInit(): void {
        this.queryUser(this._id)
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
                if (response.status) {
                    this._message.info(response.message);
                    this.user = response.result;
                } else {
                    this._message.error(response.message);
                }
            });
    }
}
