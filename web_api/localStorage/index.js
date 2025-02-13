function getAllStorage(){
    for(let i = 0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        const item = localStorage.getItem(key)
        console.log(item)
    }
}