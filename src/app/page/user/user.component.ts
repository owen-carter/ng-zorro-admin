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
    keyword = '';

    _current = 1;
    _total = 1;
    _loading = true;
    _pageSize = 10;


    _allChecked = false;
    _disabledButton = true;
    _checkedNumber = 0;
    _displayData: Array<any> = [];
    _indeterminate = false;


    constructor(private userService: UserService, private _message: NzMessageService) {
    }

    ngOnInit() {
        this.query = {
            page: this._current,
            size: this._pageSize,
            keyword: this.keyword
        };
        this.getUserList(this.query);
    }

    getUserList(query: object): void {
        this._loading = true;
        this.userService.list(query)
            .then(response => {
                this._loading = false;
                this._total = 200;
                this.userList = response.results;
                this._message.info('获取用户列表成功！');
            });
    }


    removeUser(user: User): void {
        user['checked'] = true;
        this.removeUserList([user])
    }

    removeUserList(userList: User[]): void {
        userList = userList.filter(x => x.checked);
        this.userService.remove(userList)
            .then(response => {
                if (response['status']) {
                    this._message.info(response['message']);
                    this.getUserList(this.query);
                }
            });
    }

    _checkAll(value) {
        this.userList.forEach(data => data.checked = !!value);
    };


    _refreshStatus() {
        // check is all check?
        const allChecked = this._displayData.every(value => value.checked === true);
        // check all uncheck?
        const allUnChecked = this._displayData.every(value => !value.checked);
        // set
        this._allChecked = allChecked;
        //
        this._indeterminate = (!allChecked) && (!allUnChecked);
    };


}

