import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../service/project.service";

@Component({
    selector: 'nz-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

    constructor(public projectService: ProjectService) {
    }

    ngOnInit() {
        let ele = document.getElementById('file-sel')
        ele.addEventListener('change', (e) => {
            console.dir(e)
        })
    }

    upload() {
        let ele: any = document.getElementById('file-sel')
        let fileList = ele.files;
        console.dir(ele)
        let formdata: FormData = new FormData();
        formdata.append('files', fileList)
        this.projectService.upload(formdata).then((response) => {
            console.dir(response)
        })
    }


}
