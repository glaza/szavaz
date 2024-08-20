import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { BallotsComponent } from './ballots/ballots.component'

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'ballots', component: BallotsComponent },
]
