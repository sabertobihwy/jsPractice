function throttle(func, wait, { leading = true, trailing = true }) {
    let id;
    let latestArgs;
    let latestThis;
    let extraInvoke = false;
    return function (...args) {
        if (!id) {
            id = setTimeout(() => {
                id = null
                // 如果 wait 时间内没有额外调用，trailing 不会触发。
                if (trailing && extraInvoke) {
                    func.apply(latestThis, latestArgs)
                    latestArgs = null
                    latestThis = null
                    extraInvoke = false // **确保 trailing 触发后重置**
                } // 需要是最后调用的参数
            }, wait)
            if (leading) {
                func.apply(this, args)
            } else {
                // leading: false 时，trailing 并不需要 wait 期间额外调用才能执行。即使 没有额外调用，
                latestArgs = args
                latestThis = this
                extraInvoke = true;
            }
        } else {
            latestArgs = args
            latestThis = this
            extraInvoke = true
        }

    }
}

const log = throttle(() => console.log('Hello'), 1000);
log();
log();
log(); // 只会立即执行一次，之后 1 秒内不会再执行