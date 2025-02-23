async function downloadFetch(option) {
    const { method, url, body, onProgress } = option
    const resp = await fetch(url, {
        method,
        body: body
    })
    const total = +resp.headers.get('content-length')
    const decoder = new TextDecoder()
    const reader = resp.body.getReader()
    let str = ''
    let loaded = 0
    while (1) {
        const { done, value } = await reader.read()
        if (done) {
            break
        }
        loaded += value.length
        onProgress & onProgress(total, loaded)
        const text = decoder.decode(value)
        str += text
    }
    return str
}

downloadFetch({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    onProgress: (total, loaded) => {
        console.log(`total: ${total}, loaded: ${loaded}`)
        // const pc = Math.round((loaded / total) * 100)
        // console.log(pc + '%')
    }
})