/**
 *  1. baseURL 统一处理
 *  2. response-code ！== 0： alert
 *  3. Response-headers出现 Authorization:tooken, 需要把token保存到localstorage
 *  4. request：localstorage包含token => 
 *  带入到请求头 Authorization: Bearer token
 */

const instance = axios.create({
    baseURL: 'https://study.duyiedu.com'
})

instance.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        alert(resp.data.msg)
    }
    const token = resp.headers.authorization
    if (token) {
        localStorage.setItem('token', token)
    }
    console.log(resp)
    return resp.data.data // 先到这
}, function (error) {
    alert(error.message)
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }
    return config
})

async function login(loginId, loginPwd) {
    const resp = await instance.post('/api/user/login', {
        loginId,
        loginPwd
    })
    console.log(resp)
    return resp
}

async function reg(loginId, loginPwd, nickname) {
    return await instance.post('/api/user/reg', { loginId, loginPwd, nickname })
}

async function exists(loginId) {
    return await instance.get('/api/user/exists', {
        params: { loginId }
    })
}

async function profile() {
    return await instance.get('/api/user/profile')
}


(async function () {
    // await login('admin2', '123123')
    // await reg('admin2024', '123123', 'admin1')
    // await exists('admin2024')
    await profile()
})()