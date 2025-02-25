class TaskPro {
    _q = []
    _isRunning = false
    _idx = 0

    _next = async () => {
        if (this._isRunning && this._idx < this._q.length - 1) {
            this._idx++
            await this._runTask()
        } else {
            this._isRunning = false
            this._q = []
            this._idx = 0
        }
    }

    async _runTask() {
        const oid = this._idx
        const fn = this._q[this._idx]
        await fn(this._next)
        if (this._idx === oid) { // 如果没有手动的调用next
            this._next()
        }

    }

    addTask(fn) {
        this._q.push(fn)

    }

    run() {
        if (this._isRunning || !this._q.length) {
            return
        }
        this._isRunning = true
        this._runTask()
    }

}

const t = new TaskPro()
t.addTask(async (next) => {
    console.log(1 + 'start')
    await next()
    console.log(1 + 'end')
})
t.addTask(() => {
    console.log(2)
})
t.addTask(() => {
    console.log(3)
})
t.run()