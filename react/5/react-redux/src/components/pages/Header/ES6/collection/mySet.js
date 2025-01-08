class MySet {
    constructor(iterable = []) {
        this._data = []
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error("should be iterable")
        }
        for (const item of iterable) {
            this.add(item)
        }
    }

    *[Symbol.iterator]() {
        for (const data of this._data) {
            yield data
        }
    }

    get size() {
        return this._data.length
    }

    forEach(callback) {
        for (const data of this._data) {
            callback(data, data, this)
        }
    }

    add(item) {
        if (!this.has(item)) {
            this._data.push(item)
        }
    }

    has(item) {
        for (const data of this._data) {
            if (this.isEqual(item, data)) {
                return true
            }
        }
        return false
    }

    delete(item) {
        for (let i = 0; i < this._data.length; i++) {
            if (this.isEqual(this._data[i], item)) {
                this._data.splice(i, 1)
                return true
            }
        }
        return false
    }

    clear() {
        this._data.length = 0
    }

    isEqual(data1, data2) {
        if (data1 === 0 && data2 === 0) {
            return true
        }
        return Object.is(data1, data2)
    }

}

var set = new MySet([1, 2, 3, 5, 6, 7, 5, 7, 7,])
set.add('a')