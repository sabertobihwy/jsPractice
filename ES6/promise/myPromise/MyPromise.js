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

// setTimeout(() => { console.log(1) })
// runMicroTask(() => { console.log(3) })
// console.log(2)

class MyPromise {
    constructor(executor) {
        this._state = PENDING
        this._value = undefined
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            _reject(error)
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {

        })
    }

    _changeState(state, value) {
        if (this._state !== PENDING) {
            return
        }
        this._state = state
        this._value = value
    }

    _resolve(data) {
        this._changeState(FULFILLED, data)
    }

    _reject(reason) {
        this._changeState(REJECTED, reason)
    }


}


let p = new MyPromise((resolve, reject) => {
    // resolve('123')
    reject('123')
})
console.log(p)