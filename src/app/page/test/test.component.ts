import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";
import {NzMessageService} from "ng-zorro-antd";
import {Msg} from "../../bean/msg";
@Component({
    selector: 'nz-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

    constructor(public projectService: ProjectService, private _message: NzMessageService) {
    }

    ngOnInit() {
        let ele = document.getElementById('file-sel');
        ele.addEventListener('change', (e) => {
            console.dir(e)
        })
    }

    upload() {
        let ele: any = document.getElementById('file-sel')
        let fileList = ele.files;
        let formData: FormData = new FormData();
        formData.append('book', fileList[0]);
        this.projectService.upload(formData).then((response:Msg) => {
            if (response.status) {
                this._message.info('success！');
            } else {
                this._message.error('fail')
            }
        })
    }


}
