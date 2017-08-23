import {Injectable} from '@angular/core';
import {User} from '../bean/user';


@Injectable()
export class UserService {

    constructor() {
    }

    list() {
        return new User();
    }

}
