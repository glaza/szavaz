import { Component } from '@angular/core'
import { officers } from './login.models'
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

    officers = officers

    constructor(
        private router: Router,
    ) {
        logout()
    }

    logOfficerIn(name: string) {
        login(name)
        this.router.navigate(['/'])
    }
}
