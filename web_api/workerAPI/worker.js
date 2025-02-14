onmessage = function (event){
    console.log(event.data)
    let str = ""
    for (let i = 0; i < 10 ** 2; i++) {
        str += i
    }
    const encoder = new TextEncoder();
    const buffer = encoder.encode(str).buffer;
    postMessage(buffer,[buffer])
}