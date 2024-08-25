import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ListBallotsComponent } from './list-ballots/list-ballots.component'
import { NewBallotComponent } from './new-ballot/new-ballot.component'

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: ListBallotsComponent, pathMatch: 'full' },
    { path: 'new', component: NewBallotComponent, pathMatch: 'full' },
]
