function animate(from, to, duration, onProgress) {
    const speed = (to - from) / duration
    function _run(time) {
        if (time >= duration) {
            cancelAnimationFrame(rid)
            onProgress && onProgress(to)
            return
        }
        const newValue = from + time * speed
        onProgress && onProgress(newValue.toFixed(0))
        requestAnimationFrame(_run)
    }
    const rid = requestAnimationFrame(_run)
}