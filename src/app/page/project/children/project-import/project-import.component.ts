import {Component, OnInit} from '@angular/core';
import {Project} from "../../../../bean/project";
import {NzMessageService} from 'ng-zorro-antd';
import {Msg} from "../../../../bean/msg";
import {ProjectService} from "../../../../service/project.service";

@Component({
    selector: 'nz-project-import',
    templateUrl: './project-import.component.html',
    styleUrls: ['./project-import.component.less']
})
export class ProjectImportComponent implements OnInit {

    projectContent = [];

    constructor(private projectService: ProjectService, private _message: NzMessageService) {

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

        if (fileList.length == 0) {
            return this._message.error('请选择文件再进行上传！')
        }
        formData.append('book', fileList[0]);
        this.projectService.upload(formData).then((response: Msg) => {
            if (response.status) {
                this._message.info('success！');
                this.projectContent = response.results;
            } else {
                this._message.error('fail')
            }
        })
    }
}
