function animate(time) {
    console.log(time) // 14ms
    if (time > 2000) {
        cancelAnimationFrame(rid)
        return
    }
    requestAnimationFrame(animate)
}

const rid = requestAnimationFrame(animate)