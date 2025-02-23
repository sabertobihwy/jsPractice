import { getRefreshToken } from "./getToken.js"
import { ins } from "./request.js"

export async function loginFn() {
    const resp = await ins.post('/api/auth/login',
        {
            loginId: "admin",
            password: "admin123"

        }
    )
    console.log(resp)
}

export async function protectedIF() {
    const resp = await ins.get('/api/auth/protected')
    console.log(resp)


}

export async function refreshToken() {
    const resp = await ins.get('/api/auth/refresh', {
        headers: {
            RefreshToken: `Bearer ${getRefreshToken()}`
        },
        _isRefreshToken: true
    })
    console.log(resp)
}

export function isRefreshTokan(config) {
    return !!config._isRefreshToken
}