import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';

import {RouterModule, PreloadAllModules} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserComponent} from './page/user/user.component';
import {RoleComponent} from './page/role/role.component';
import {PermissionComponent} from './page/permission/permission.component';
import {ConfigureComponent} from './page/configure/configure.component';
import {SettingComponent} from './page/setting/setting.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserComponent,
        RoleComponent,
        PermissionComponent,
        ConfigureComponent,
        SettingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

