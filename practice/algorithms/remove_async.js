

//main()
// 如何消除异步函数的传染性？
// 主函数调用异步 -> 主函数立刻报错a promise， catch里 prom.then(再次调用函数)

function run(fn) {
    let cache = []
    let i = 0
    const _origFetch = window.fetch
    window.fetch = function (...args) {
        if (cache[i]) {
            if (cache[i].status === 'fulfilled') {
                return cache[i].data // = resp data
            } else if (cache[i].status === 'rejected') {
                throw cache[i].err // = errmsg
            }
        }
        const result = {
            status: "pending",
            data: null,
            err: null
        }
        cache[i++] = result

        const prom = _origFetch(...args).then(resp => resp.json()).then(resp => {
            result.status = "fulfilled"
            result.data = resp
        }, err => {
            result.status = "rejected"
            result.err = err
        })
        throw prom


    }

    try {
        fn() // 可能调用多次fetch， i>1
    } catch (err) {
        if (err instanceof Promise) {
            const rerun = () => {
                i = 0
                fn()
            }
            err.then(rerun, rerun)
        }
    }

}


function getUser() {
    const p = fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(p)
    return p
    // .then(response => response.json())
}

function m1() {
    return getUser()
}

function m2() {
    return m1()
}

function m3() {
    return m2()
}

function main() {
    const user = m3()
    console.log(user)
}

run(main)