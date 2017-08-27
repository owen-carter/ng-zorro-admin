import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FileComponent} from './file/file.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [FileComponent],
    exports: [FileComponent]
})
export class RabbitModule {
}
