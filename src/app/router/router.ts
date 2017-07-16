import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/pages/login/login.component';
import { HomePageComponent } from '../components/pages/home/home.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: HomePageComponent
    }
];

export const AppRouteModule = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false, useHash: true } // <-- debugging purposes only
);