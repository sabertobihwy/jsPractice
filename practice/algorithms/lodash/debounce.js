function debounce(func, wait) {
    let id;
    return function (...args) {
        clearTimeout(id)
        id = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}


const log = debounce(() => console.log('Hello'), 1000);
log();
log();
log();