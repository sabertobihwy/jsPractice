function throttle(func, wait) {
    let id;
    return function (...args) {
        if (!id) {
            func.apply(this, args)
            id = setTimeout(() => {
                id = null
            }, wait)
        }

    }
}

const log = throttle(() => console.log('Hello'), 1000);
log();
log();
log(); // 只会立即执行一次，之后 1 秒内不会再执行