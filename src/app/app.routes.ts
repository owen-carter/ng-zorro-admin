/***
 * 路由文件
 */
import {Routes} from '@angular/router';
// Component
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
import {CreateComponent} from './page/create/create.component';
import {TrackComponent} from './page/track/track.component';
import {ManageComponent} from './page/manage/manage.component';
import {TestComponent} from './page/test/test.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'role', component: RoleComponent},
    {path: 'permission', component: PermissionComponent},
    {path: 'setting', component: SettingComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'backup', component: BackupComponent},
    {path: 'license', component: LicenseComponent},
    {path: 'log', component: LogComponent},
    {path: 'audit', component: AuditComponent},
    {path: 'system', component: SystemComponent},
    {path: 'search', component: SearchComponent},
    {path: 'customer', component: CustomerComponent},
    {path: 'project.create', component: CreateComponent},
    {path: 'project.track', component: TrackComponent},
    {path: 'project.manage', component: ManageComponent},
    {path: 'configure', component: ConfigureComponent},
    {path: 'test', component: TestComponent}

    // { path: '**', component: PageNotFoundComponent }
];
