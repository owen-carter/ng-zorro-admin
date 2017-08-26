import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../bean/user';
import {Msg} from '../../bean/msg';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
    selector: 'nz-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

    userList = [];
    user = {};
    query = {};
    _value = '';

    constructor(private userService: UserService, private _message: NzMessageService) {
    }

    ngOnInit() {
        this.getUserList({});
        this._message.info('这是一条普通的提醒');
    }

    getUserList(query: object): void {
        this.userService.list(query)
            .then(result => {
                this.userList = result;
            });
    }

    createUser(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.userService.create(name)
            .then(hero => {
                this.userList.push(hero);
                this.user = null;
            });
    }

    queryUser(id: string): void {
        this.userService.query(id)
            .then(hero => {
                this.userList.push(hero);
                this.user = null;
            });
    }

    removeUser(id: string): void {
        this.userService.remove(id)
            .then(result => {
                if (result['status']) {
                    this._message.info('这是一条普通的提醒');
                }
            });
    }


}

