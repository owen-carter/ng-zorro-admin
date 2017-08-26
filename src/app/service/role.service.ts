import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoleService {
    private roleUrl = 'api/role';  // URL to web api
    constructor(private http: Http) {
    }


}
