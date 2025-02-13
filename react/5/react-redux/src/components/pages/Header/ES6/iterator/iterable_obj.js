const obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]() {
        const keys = Object.keys(obj)
        let i = 0;
        return {
            next: () => {
                const key = keys[i]
                const val = this[key]
                const result = {
                    value: { propName: key, propValue: val },
                    done: i >= keys.length
                }
                i++
                return result
            }

        }
    }

}

for (const entry of obj) {
    console.log(entry)
}

