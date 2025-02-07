const str = 'sfsagadfgsdf'
const result = [...str].reduce((a,c)=>{
    a[c] = a[c]+1 || 1
    return a 
},{})
console.log(result)