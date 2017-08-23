import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

// service
import {UserService} from './service/user.service';

// component
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserComponent} from './page/user/user.component';
import {RoleComponent} from './page/role/role.component';
import {PermissionComponent} from './page/permission/permission.component';
import {ConfigureComponent} from './page/configure/configure.component';
import {SettingComponent} from './page/setting/setting.component';
import {UpgradeComponent} from './page/upgrade/upgrade.component';
import {BackupComponent} from './page/backup/backup.component';
import {LicenseComponent} from './page/license/license.component';
import {LogComponent} from './page/log/log.component';
import {AuditComponent} from './page/audit/audit.component';
import {SystemComponent} from './page/system/system.component';
import {SearchComponent} from './page/search/search.component';
import {CustomerComponent} from './page/customer/customer.component';
import {FileComponent} from './feature/file/file.component';

// pipe
import {TimestampPipe} from './pipe/timestamp.pipe';


@NgModule({
    providers: [
        UserService
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        UserComponent,
        RoleComponent,
        PermissionComponent,
        ConfigureComponent,
        SettingComponent,
        UpgradeComponent,
        BackupComponent,
        LicenseComponent,
        LogComponent,
        AuditComponent,
        SystemComponent,
        SearchComponent,
        CustomerComponent,
        TimestampPipe,
        FileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

