import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Project} from "../bean/project";
import {Msg} from "../bean/msg";
import * as qs from "querystring";

import "rxjs/add/operator/toPromise";


@Injectable()
export class ProjectService {
    private projectUrl = 'api/project';
    private headers    = new Headers({'Content-Type': 'application/json'});


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
        const url = `${this.projectUrl}/list?${qs.stringify(param)}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    query(id: string): Promise<Msg> {
        const url = `${this.projectUrl}/query?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    create(projectInfo: object): Promise<Msg> {
        const url = `${this.projectUrl}/create`;
        return this.http
            .post(url, JSON.stringify({data: projectInfo}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    remove(projectList: Project[]): Promise<Msg> {
        const url = `${this.projectUrl}/remove`;
        return this.http
            .post(url, JSON.stringify({data: projectList}), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
}
