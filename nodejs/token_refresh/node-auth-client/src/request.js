import { getToken, setFreshToken, setToken } from "./getToken.js";
import { isRefreshTokan, refreshToken } from "./login.js";

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
    console.log(1)
    // console.log(res.headers)
    if (res.headers.authorization) {
        //   console.log(1)
        const token = res.headers.authorization.replace('Bearer ', '')
        //   console.log('updateToken:' + token)
        setToken(token)
    }
    if (res.headers.refreshtoken) {
        const refresh = res.headers.refreshtoken.replace('Bearer ', '')
        setFreshToken(refresh)
    }

    return res
}, async (error) => {
    console.log(error.response.data.message)
    if (error.response.status === 403 && !isRefreshTokan(error.config)) {
        await refreshToken()
        // 重新发送请求
        return await ins.request(error.config)
    }

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

