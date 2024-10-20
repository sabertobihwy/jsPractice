const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


function runMicroTask(callback) {
    if (process && process.nextTick) {
        process.nextTick(callback)
    } else if (MutationObserver) {
        const p = document.createElement('p')
        const observer = new MutationObserver(callback)
        observer.observe(p, {
            childList: true
        })
        p.innerHTML = 1
    } else {
        setTimeout(callback, 0)
    }
}

function isPromise(obj) {
    return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
}

// setTimeout(() => { console.log(1) })
// runMicroTask(() => { console.log(3) })
// console.log(2)

class MyPromise {
    constructor(executor) {
        this._state = PENDING
        this._value = undefined
        this._handlers = []
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }
    // data : mypromise - ok 
    //          promise - no
    static resovle(data) {
        if (data instanceof MyPromise) {
            return data
        }
        return new MyPromise((resolve, reject) => {
            if (isPromise(data)) {
                data.then(resolve, reject) // fulfilled -> resolve(date); 
            } else {
                resolve(data)
            }

        })
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason)
        })
    }

    _runOneHandler({ status, handler, resolve, reject }) {
        if (this._state !== status) {
            return
        }
        runMicroTask(() => {
            // 1. handler is not a function 
            if (typeof handler !== 'function') {
                this._state === FULFILLED ? resolve(this._value) : reject(this._value)
            } else {
                try {
                    const result = handler(this._value)
                    // 2. handler return a Promise
                    if (isPromise(result)) {
                        result.then(resolve, reject)
                    } else {
                        resolve(result) //? 什么时候reject(result) ： reject是在当前task里出错才reject，和this._state没关系
                    }

                } catch (error) {
                    reject(error)
                }

            }

        })

    }

    _iterateHandlers() {
        if (this._state === PENDING) {
            return
        }
        while (this._handlers[0]) {
            this._runOneHandler(this._handlers[0])
            this._handlers.shift()
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._handlers.push({ status: FULFILLED, handler: onFulfilled, resolve, reject })
            this._handlers.push({ status: REJECTED, handler: onRejected, resolve, reject })
            this._iterateHandlers()
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    /**
     *  resolve => fn() and then return data 
     *  reject =>  fn() and then throw reason 
     *  this.then(fn, fn) -> 这样fn里能拿到data/reason，而事实不能 -> 包一层
     * @param {*} fn 
     * @returns 
     */
    finally(fn) {
        return this.then(
            (data) => {
                fn() // fn() 内部throw error的话，会被内部try-catch然后reject error
                return data
            },
            (reason) => {
                fn()
                throw reason
            })
    }

    _changeState(state, value) {
        if (this._state !== PENDING) {
            return
        }
        this._state = state
        this._value = value
        this._iterateHandlers()
    }

    _resolve(data) {
        this._changeState(FULFILLED, data)
    }

    _reject(reason) {
        this._changeState(REJECTED, reason)
    }


}


// let p = new MyPromise((resolve, reject) => {
//     setTimeout(() => { resolve('111') })
//     // reject('123')
// })
// let p2 = p.then((data) => {
//     console.log(`222, data is ${data}`) // 2. 222,data is 111
//     return new Promise((resolve, reject) => {
//         resolve(1)
//     })
// },
//     (reason) => {
//         console.log(reason)
//     })
// console.log(p) // 1. Promise<pending>
// setTimeout(() => {
//     console.log(p2)
// }, 1000) // 3. Promise<fulfilled> 333


// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('111') })
//     // reject('123')
// })

// let p3 = p2.then((data) => {
//     console.log(`222, data is ${data}`) // 2. 222,data is 111
//     return 333
// },
//     (reason) => {
//         console.log(reason)
//     })

// console.log(p2) // 1. Promise<pending>

// setTimeout(() => {
//     console.log(p3)
// }, 1000) // 3. Promise<fulfilled> 333

// test finally
// const p1 = new MyPromise((resolve, reject) => {
//     resolve(1)
// })

// const p11 = p1.finally(() => {
//     console.log('finally')
//     throw 2
// })

// setTimeout(() => { console.log(p11) }) 

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}
Promise.prototype.finally = function (fn) {
    return this.then(
        (data) => {
            fn()
            return data
        },
        (reason) => {

            fn()
            throw reason
        })
}