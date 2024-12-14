
function randomString(len){
    return Math.random().toString(36).slice(2,2+len).split("").join('.')
}

export default randomString