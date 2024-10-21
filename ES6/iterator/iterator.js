const arr1 = [1, 2, 3, 4]
const arr2 = [4, 5, 6, 7, 8]

function createIterator(arr) {
    let i = 0;
    return {
        next: () => {
            const result = {
                value: arr[i++],
                done: i >= arr.length
            }
            return result
        }
    }
}

function unlimitedArrIterator() {
    let prev1 = 1
    let prev2 = 1
    let n = 1
    return {
        next: () => {
            let val = 0
            if (n <= 2) {
                val = 1
            } else {
                val = prev1 + prev2
            }
            const result = {
                value: val,
                done: false
            }
            n++
            prev2 = prev1
            prev1 = val
            return result
        }
    }
}

const iter = unlimitedArrIterator()
iter.next()
