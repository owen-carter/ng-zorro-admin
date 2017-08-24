import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl
} from '@angular/forms';


@Component({
    selector: 'nz-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

    validateForm: FormGroup;
    controlArray = [];
    isCollapse = true;

    query = {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: ''
    };

    toggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }

    resetForm() {
        this.validateForm.reset();
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({});
        for (let i = 0; i < 10; i++) {
            this.controlArray.push({index: i, show: i < 6});
            this.validateForm.addControl(`query${i}`, new FormControl());
        }
    }

}
