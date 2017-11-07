import {
    Component,
    EventEmitter,
    OnInit,
    Input,
    Output
} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'app';
    isCollapsed = false;
    position = ['首页', '用户管理'];

    constructor() {
    }

    ngOnInit() {

    }


}



