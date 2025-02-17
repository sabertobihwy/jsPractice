/**
 *  把task放进微队列。在各种环境下适配。
 * @param {*} fn  task
 */
function putMicroQueue(fn) {
    // 1. support Promise
    if (typeof Promise === 'function') {
        Promise.resolve().then(fn)
        return
    }
    // 2. support MutationObserver
    if (typeof MutationObserver === 'function') {
        const node = document.createTextNode('')
        const ob = new MutationObserver(fn)
        ob.observe(node, { characterData: true })
        node.data = 123
        return
    }
    // 3. nodejs
    if (process && process.nextTick) {
        process.nextTick(fn)
        return

    }
}