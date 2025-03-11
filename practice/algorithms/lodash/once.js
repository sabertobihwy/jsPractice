function once(func) {
    let init = false
    let result
    return function (...args) {
        if (!init) {
            init = true
            result = func.apply(this, args)
        }
        return result
    }
}

const init = once(() => console.log('Initialized!'));
init(); // ✅ "Initialized!"
init(); // ❌ (不会再执行)

const returnOnce = once(() => 42);
console.log(returnOnce()); // ✅ 42
console.log(returnOnce()); // ✅ 42 (不会再执行，但返回之前的值)

const sumOnce = once((a, b) => a + b);
console.log(sumOnce(2, 3)); // ✅ 5
console.log(sumOnce(10, 20)); // ✅ 5 (仍然返回5)
