class MyMap {
    constructor(iterable = []) {
        this._data = []
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error("should be iterable")
        }
        for (const iterItem of iterable) {
            if (typeof iterItem[Symbol.iterator] !== 'function') {
                throw new TypeError("should be iterable")
            }
            const iterator = iterItem[Symbol.iterator]()
            const key = iterator.next().value
            const value = iterator.next().value
            this.set(key, value)
        }
    }

    *[Symbol.iterator]() {
        for (const entry of this._data) {
            yield [entry.key, entry.value]
        }
    }

    set(key, value) {
        if (this.has(key)) {
            this.has(key).value = value
        } else {
            this._data.push({ key, value })
        }
    }

    get(key) {
        const entry = this._getObj(key)
        if (entry) {
            return entry.value
        }
        return undefined
    }

    _getObj(key) {
        for (const entry of this._data) {
            if (this.isEqual(entry.key, key)) {
                return entry
            }
        }
        return undefined
    }

    has(key) {
        const entry = this._getObj(key)
        if (entry) {
            return entry
        }
        return undefined

    }

    clear() {
        this._data.length = 0
    }

    get size() {
        return this._data.length
    }

    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true
        }
        return Object.is(data1, data2)
    }

    delete(key) {
        for (let i = 0; i < this._data.length; i++) {
            if (this.isEqual(this._data[i].key, key)) {
                this._data.splice(i, 1)
                return true
            }
        }
        return false
    }

    forEach(callback) {
        for (const entry of this._data) {
            callback(entry, entry.key, this)
        }
    }
}