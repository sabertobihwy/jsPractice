const filterObj = (obj, ...props) => {
    return Object.fromEntries(Object.entries(obj).filter(arr => props.includes(arr[0])))
}

console.log(filterObj({ a: 1, b: 2, c: 3 }, 'a', 'c'))