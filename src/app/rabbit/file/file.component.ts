import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    OnInit
} from '@angular/core';


@Component({
    selector: 'rabbit-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.less']
})
export class FileComponent implements OnInit {
    fileList = [];
    _filename = "doc";
    _name = 'file';
    onChange: any = Function.prototype;
    ele: any;

    @Input()
    get name(): string {
        return this._name;
    };

    constructor() {
    }

    ngOnInit() {

    }

    AfterViewInit() {
        document.getElementById(this._name).addEventListener('change', (evt) => {
            console.dir(evt)
        })
    }

}

