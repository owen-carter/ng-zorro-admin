/***
 * 路由文件
 */
import {Routes} from '@angular/router';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {UserComponent} from './page/user/user.component';
import {RoleComponent} from './page/role/role.component';
import {PermissionComponent} from './page/permission/permission.component';


export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'role', component: RoleComponent},
    {path: 'permission', component: PermissionComponent},
    // { path: '**', component: PageNotFoundComponent }
];
