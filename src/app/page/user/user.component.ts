import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';
import {UserService} from '../../service/user.service';
// import {User} from '../../bean/user';

@Component({
    selector: 'nz-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

    userList = [];
    // userList = User[];

    constructor(private UserService: UserService) {

    }

    ngOnInit() {

        // this.userList = this.UserService.list();
        for (let i = 0; i < 46; i++) {
            // this.userList.push(new User());
        }
    }


}

