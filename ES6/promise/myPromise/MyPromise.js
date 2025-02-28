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
    static resolve(data) {
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

    /**
     * 1. promps is an iterable obj
     * 2. promps can be [pro,pro,4]
     * 3. all resolve -> fulfilled []
     *    reject -> rejected reason  
     * @param {} proms 
     */
    static all(proms) {
        return new MyPromise((resolve, reject) => {
            try {
                let count = 0
                let fulfilledCount = 0
                const results = []
                for (const p of proms) {
                    let index = count
                    count++
                    MyPromise.resolve(p).then((data) => {
                        fulfilledCount++
                        results[index] = data
                        if (fulfilledCount === count) {
                            resolve(results)
                        }
                    }, reject)
                }
                if (count === 0) {
                    return resolve(results)
                }
            } catch (error) {
                reject(error)
            }

        })
    }

    /**
     *  proms里面的全部complete后返回，只有成功
     */
    static allSettled(proms) {
        const results = []
        for (const p of proms) {
            results.push(MyPromise.resolve(p).then((data) => {
                return {
                    status: FULFILLED,
                    value: data
                }
            }, (reason) => { // 错误被捕获，这个promise结束后依然是fulfilled
                return {
                    status: REJECTED,
                    value: reason
                }
            }))
        }
        return MyPromise.all(results)
    }

    static race(proms) {
        return new MyPromise((resolve, reject) => {
            for (const p of proms) {
                // MyPromise.resolve(p).then((data) => {
                //     resolve(data)
                // }, (reason) => {
                //     reject(reason)
                // })
                MyPromise.resolve(p).then(resolve, reject)
            }
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

let pro1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject(1)
    }, 1000)
})

let pro2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

let pro3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 3000)
})



// MyPromise.allSettled([pro1,
//     MyPromise.resolve(2),
//     MyPromise.resolve(3),
//     4]
// ).then((data) => { console.log(data) }, (reason) => { console.log(reason) })
// [1,2,3,4]

MyPromise.race([pro1,
    pro2,
    pro3,
    4]
).then((data) => { console.log(data) }, (reason) => { console.log(reason) })