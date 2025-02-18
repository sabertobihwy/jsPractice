export function useDefer() {
    let n = 0
    function _run() {
        n++
        requestAnimationFrame(_run)
    }
    requestAnimationFrame(_run)
    return function (m) {
        return m >= n
    }
}
// 100个组件，让每个组件依次渲染