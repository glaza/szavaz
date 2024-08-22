import { ensure } from '../../utils'

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
