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
        this.getUserList(this.query);
    }

    getUserList(query: object): void {
        this.userService.list(query)
            .then(response => {
                console.dir(response);
                this.userList = response.results;
                this._message.info('获取用户列表成功！');
            });
    }



    removeUser(id: string): void {
        this.userService.remove(id)
            .then(response => {
                if (response['status']) {
                    this._message.info(response['message']);
                    this.getUserList(this.query);
                }
            });
    }


}

