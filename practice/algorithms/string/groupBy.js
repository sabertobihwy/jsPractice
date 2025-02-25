const data = [
    { name: 'Alice', sex: 'female', age: 12 },
    { name: 'Bob', sex: 'male', age: 13 },
    { name: 'Charlie', sex: 'male', age: 14 },
    { name: 'Diana', sex: 'female', age: 12 },
    { name: 'Ethan', sex: 'male', age: 15 },
    { name: 'Fiona', sex: 'female', age: 13 },
    { name: 'George', sex: 'male', age: 14 },
    { name: 'Hannah', sex: 'female', age: 12 },
    { name: 'Ian', sex: 'male', age: 13 },
    { name: 'Jane', sex: 'female', age: 14 }
];

function groupBy(datas, generateKey) {
    if (typeof generateKey === 'string') {
        const key = generateKey
        generateKey = () => key
    }
    const result = []
    datas.forEach(data => {
        const key = generateKey(data)
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(data)
    })
    return result
}

console.log(groupBy(data, 'female'))
//console.log(groupBy(data, (item) => item.age + '-' + item.sex))