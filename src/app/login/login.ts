import { ensure } from '../../utils'
import { User, users } from './login.models'

export function isLoggedIn(): boolean {
    return !!localStorage.getItem('user')
}

export function login(username: string): void {
    localStorage.setItem('user', username)
}

export function logout(): void {
    localStorage.removeItem('user')
}

export function getUsername(): string {
    return ensure(localStorage.getItem('user'))
}

export function getUser(): User {
    return ensure(users.find(user => user.name === getUsername()))
}

export function isOfficer(user: User) {
    return user.rank && /(cs)?c?st/.test(user.rank)
}

export function getOfficerCount() {
    return users.filter(user => isOfficer(user)).length
}
