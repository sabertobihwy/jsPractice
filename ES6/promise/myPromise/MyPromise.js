const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

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