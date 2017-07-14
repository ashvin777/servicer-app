import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/pages/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];

export const appRouteModule = RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
);