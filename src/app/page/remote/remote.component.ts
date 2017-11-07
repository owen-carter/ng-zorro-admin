import {Component, OnInit} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'nz-demo-card-grid',
    templateUrl: './remote.component.html',
    styleUrls: ['./remote.component.less']
})
export class RemoteComponent implements OnInit {

    validateForm: FormGroup;
    onLine: boolean;

    constructor(private fb: FormBuilder) {
        this.onLine = true;
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            remoteIp: [null, [Validators.required]],
            remotePort: [null, [Validators.required]],
            remember: [true],
        });
    }

    _submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
    }


}

