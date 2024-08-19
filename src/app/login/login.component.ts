import { Component } from '@angular/core'
import { officers } from './login.models'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    officers = officers
}
