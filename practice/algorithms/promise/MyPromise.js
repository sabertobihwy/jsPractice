const REJECT = 'REJECT'
const FULFILLED = 'FULFILLED'
const PENDING = 'PENDING'


function isPromiseLike(pro) {
    return !!(pro && typeof pro === 'object' && typeof pro.then === 'function')
}

function runMicroTask(callback) {
    if (process && process.nextTick) {
        process.nextTick(callback)
    } else if (MutationObserver) {
        const mo = new MutationObserver(callback)
        const p = document.createElement('p')
        mo.observe(p, {
            childList: true
        })
        p.innerText = 1
    } else {
        setTimeout(callback, 0)
    }
}


class MyPromise {
    constructor(excecutor) {
        this._status = PENDING
        this._handlers = []
        this._value = undefined
        try {
            excecutor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
    }



    static resolve(val) {
        // 1. Promise 
        if (val instanceof MyPromise) {
            return val
        }
        // 2. PromiseLike

        // 3. other value 2

        return new MyPromise((resolve, reject) => {
            if (isPromiseLike(val)) {
                val.then(resolve, reject)
            } else {
                resolve(val)
            }
        })
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason)
        })
    }

    _iterateHandlers() {
        if (this._status === PENDING) {
            return
        }
        while (this._handlers[0]) {
            this._runOneTask(this._handlers[0])
            this._handlers.shift()
        }
    }

    _runOneTask({ status, onHandler, resolve, reject }) {
        if (this._status !== status) {
            return
        }
        runMicroTask(() => {
            if (typeof onHandler !== 'function') { // than(2) -> ignore; than(Promise) ??;
                this._status === FULFILLED ? resolve(this._value) : reject(this._value)
            } else {
                try { // than((val)=>{}, (err) => {});
                    const result = onHandler(this._value)
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject)
                    } else {
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }
        })

    }

    _changeStatus(status, value) {
        if (this._status !== PENDING) {
            return
        }
        this._status = status
        this._value = value
        this._iterateHandlers()
    }

    _resolve(value) {
        this._changeStatus(FULFILLED, value)
    }

    _reject(reason) {
        this._changeStatus(REJECT, reason)
    }

    then(onResolve, onReject) {
        return new Promise((resolve, reject) => {
            this._handlers.push({ status: FULFILLED, onResolve, resolve, reject }) // OnResolve 的时候调用resolve
            this._handlers.push({ status: REJECT, onReject, resolve, reject })
            this._iterateHandlers()
        })

    }

    catch(onReject) {
        return this.then(null, onReject)

    }

}




