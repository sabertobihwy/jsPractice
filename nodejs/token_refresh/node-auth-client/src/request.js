import { getToken, setFreshToken, setToken } from "./getToken.js";

export const ins = axios.create({
    baseURL: 'http://localhost:3000'
})

ins.interceptors.request.use((config) => {
    const token = getToken();  // 每次请求前重新获取最新的 Token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('useToken:' + token)
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

ins.interceptors.response.use(async (res) => {
    console.log(res.headers)
    if (res.headers.authorization) {
        console.log(1)
        const token = res.headers.authorization.replace('Bearer ', '')
        console.log('updateToken:' + token)
        setToken(token)
    }
    if (res.headers.refreshtoken) {
        const refresh = res.headers.refreshtoken.replace('Bearer ', '')
        setFreshToken(refresh)
    }
    return res
})

// const resp = await ins.post('/api/auth/login', {
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         loginId: "admin",
//         password: "admin123"

//     })
// })

