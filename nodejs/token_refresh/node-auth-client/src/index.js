import { loginFn, protectedIF, refreshToken } from "./login.js"

const dom = {
    request: document.querySelector('#request'),
    login: document.querySelector('#login'),
    refresh: document.querySelector('#refresh')
}

// dom.login.addEventListener('click', async (e) => {
//     try {
//         const resp = await fetch('http://localhost:3000/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 loginId: "admin",
//                 password: "admin123"

//             })
//         })
//         const msg = await resp.json()
//         console.log(msg)
//         // localStorage
//         localStorage.setItem('token', msg.accessToken)
//         localStorage.setItem('refreshToken', msg.refreshToken)
//     } catch (error) {
//         console.log(error)
//     }
// })

dom.login.addEventListener('click', () => {
    loginFn()
})

dom.request.addEventListener('click', () => {
    protectedIF()
})

dom.refresh.addEventListener('click', () => {
    refreshToken()
})