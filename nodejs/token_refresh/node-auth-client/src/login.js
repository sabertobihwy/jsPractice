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
    try {
        const resp = await ins.get('/api/auth/protected')
        console.log(resp)
    } catch (error) {
        console.log(error.response.data.message)
    }

}

export async function refreshToken() {
    try {
        const resp = await ins.get('/api/auth/refresh', {
            headers: {
                RefreshToken: `Bearer ${getRefreshToken()}`
            }
        })
        console.log(resp)
    } catch (error) {
        console.log(error.response.data.message)
    }
}