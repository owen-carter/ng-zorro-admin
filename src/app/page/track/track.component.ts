import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../bean/project";
import {NzMessageService} from "ng-zorro-antd";

@Component({
    selector   : 'nz-track',
    templateUrl: './track.component.html',
    styleUrls  : ['./track.component.less']
})
export class TrackComponent implements OnInit {

    projectList = [];
    project     = {};
    query       = {};
    keyword     = '';

    _current  = 1;
    _total    = 1;
    _loading  = true;
    _pageSize = 10;


    _allChecked              = false;
    _disabledButton          = true;
    _checkedNumber           = 0;
    _displayData: Array<any> = [];
    _indeterminate           = false;


    constructor(private projectService: ProjectService, private _message: NzMessageService) {
    }

    ngOnInit() {
        this.query = {
            page   : this._current,
            size   : this._pageSize,
            keyword: this.keyword
        };
        this.getUserList(this.query);
    }

    getUserList(query: object): void {
        this._loading = true;
        this.projectService.list(query)
            .then(response => {
                this._loading    = false;
                this._total      = 200;
                this.projectList = response.results;
                this._message.info(response.message);
            });
    }


    removeUser(project: Project): void {
        project['checked'] = true;
        this.removeUserList([project]);
    }

    removeUserList(projectList: Project[]): void {
        projectList = projectList.filter(x => x.checked);
        this.projectService.remove(projectList)
            .then(response => {
                if (response['status']) {
                    this._message.info(response['message']);
                    this.getUserList(this.query);
                }
            });
    }

    _checkAll(value) {
        this.projectList.forEach(data => data.checked = !!value);
    }


    _refreshStatus() {
        // check is all check?
        const allChecked    = this._displayData.every(value => value.checked === true);
        // check all uncheck?
        const allUnChecked  = this._displayData.every(value => !value.checked);
        // set
        this._allChecked    = allChecked;
        //
        this._indeterminate = (!allChecked) && (!allUnChecked);
    }


}

