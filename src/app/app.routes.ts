import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { BallotsComponent } from './ballots/ballots.component'
import { NewBallotComponent } from './new-ballot/new-ballot.component'

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: BallotsComponent, pathMatch: 'full' },
    { path: 'new', component: NewBallotComponent, pathMatch: 'full' },
]
