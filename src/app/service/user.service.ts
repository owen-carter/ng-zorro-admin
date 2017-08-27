import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {User} from '../bean/user';
import {Msg} from '../bean/msg';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
    private userUrl = 'api/user';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    /***
     * 异常处理器
     * @param error
     * @returns {Promise<never>}
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    list(param: object): Promise<Msg> {
        const url = `${this.userUrl}/list?${param}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    query(id: string): Promise<Msg> {
        const url = `${this.userUrl}/query?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    create(name: string): Promise<Msg> {
        const url = `${this.userUrl}/create`;
        return this.http
            .post(url, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    remove(id: string): Promise<Msg> {
        const url = `${this.userUrl}/remove`;
        return this.http
            .post(url, JSON.stringify({id: id}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

}
