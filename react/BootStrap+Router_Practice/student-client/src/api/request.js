import axios from 'axios'

const ins = axios.create({
    baseURL: 'http://localhost:3000/'
})

ins.interceptors.request.use((config) => {

    return config
})

ins.interceptors.response.use((resp) => {
    // console.log(resp)
    return resp
}, (error) => {
    return Promise.reject(error)
})

export default ins