import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ApplicationComponent } from './application/application.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NewDataComponent } from './views/new-data/new-data.component';
import { HistoryComponent } from './views/history/history.component';

export const routes: Routes = 
[
    { path: '', component: ApplicationComponent, canActivate: [AuthGuardService], children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'newData', component: NewDataComponent },
        { path: 'history', component: HistoryComponent },
    ] },
    { path: 'login', component: LoginPageComponent },
    { path: '**', redirectTo: '' },
];





