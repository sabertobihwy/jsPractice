const viewed_btn = document.querySelector('#viewed_btn')
const container = document.querySelector('#container')
const countPerPage = 8
const visibleImgSet = new Set()
const currentIndex = 10

createElement(20)
const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
        const id = +en.target.dataset.id
        if (en.isIntersecting) {
            //console.log(en.target)
            visibleImgSet.add(id)
            if (id === currentIndex) {
                viewed_btn.style.display = "none"
            }
        } else {
            // console.log(id)
            if (id === currentIndex) {
                viewed_btn.style.display = "block"
            }
            if (visibleImgSet.has(id)) {
                visibleImgSet.delete(id)
            }
        }
    })
}, {
    threshold: 0
})
const imgDoms = container.querySelectorAll('img')
imgDoms.forEach((img) => {
    io.observe(img)
})


function debounce(fn, delay) {
    let id
    return function (...args) {
        clearTimeout(id)
        id = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function getImgs() {
    for (const id of visibleImgSet) {
        const img = container.querySelector(`img[data-id="${id}"]`)
        img.src = `https://picsum.photos/150/250?id=${id}`
    }
}

window.addEventListener("scroll", debounce(getImgs, 500))

// 1 page = 9 items 
function createElement(id) {
    // id => which page? => total?
    const page = Math.floor(id / countPerPage)
    const total = (page + 1) * countPerPage
    const frag = document.createDocumentFragment()
    for (let i = 0; i < total; i++) {
        const img = document.createElement('img');
        img.dataset.id = i;
        img.classList.add('card')
        frag.appendChild(img)
    }
    container.appendChild(frag)
}

viewed_btn.addEventListener('click', async (e) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${currentIndex}`)
    const data = await resp.json()
    console.log(data.id)
    const targetDom = document.querySelector(`img[data-id="${data.id}"]`)
    targetDom.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
}) 