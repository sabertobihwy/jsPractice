function hightlight(id) { // dom | id | starts_with_#
    // clear
    const origin = document.querySelectorAll('a.hightlight')
    origin.forEach(a => a.classList.remove('hightlight'))
    if (id instanceof HTMLElement) {
        id.classList.add('hightlight')
        return
    }
    if (id.startsWith('#')) {
        id = id.slice(1)
    }
    const title = document.querySelector(`a[href="#${id}"]`)
    console.log(title)
    // add class
    title.classList.add('hightlight')
}