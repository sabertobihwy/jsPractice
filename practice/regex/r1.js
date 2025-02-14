function test1(str){
    return str.replace(/\B(?=(\d{3})+$)/g,',')
}
function test2(str){
    return str.replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

console.log(test2('100000000px'))

// (?= ) (?! )
// [^ ] 