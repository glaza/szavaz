import { Component } from '@angular/core'
import { users } from './login.models'
import { login, logout } from './login'
import { Router } from '@angular/router'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    users = users

    constructor(
        private router: Router,
    ) {
        logout()
    }

    logUserIn(name: string) {
        login(name)
        this.router.navigate(['/'])
    }
}
