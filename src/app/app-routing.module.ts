/***
 * 路由模块
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {routes} from './app.routes';


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            useHash: true,
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
