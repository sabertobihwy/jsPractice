const parseUrl = (url) => {
    const r = {}
    /**
     *  如果match，匹配到的回调函数会多次调用，每次返回matchstring, 捕获组1，捕获组2，...
     */
    url.replace(/([^?&]+)=([^&]+)/g, (_, k, v) => {
        r[k] = v
    })
    return r
}

console.log(parseUrl('a=1&b=2'))
console.log(parseUrl('https://www.bilibili.com/video/BV1xq4y1o7xt/?spm_id_from=333.337.search-card.all.click&vd_source=da5f7752459c7aa50c87ee0f16c7cb4d'))