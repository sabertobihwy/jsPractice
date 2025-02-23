const TOKEN = "TOKEN"
const REFRESH_TOKEN = "REFRESH_TOKEN"

export function getToken() {
    return localStorage.getItem(TOKEN)
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN)
}

export function setToken(token) {
    localStorage.setItem(TOKEN, token)
}

export function setFreshToken(refresh) {
    localStorage.setItem(REFRESH_TOKEN, refresh)
}