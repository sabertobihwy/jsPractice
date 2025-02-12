class Node {
    constructor(value) {
        this.value = value;  // 节点值
        this.children = [];  // 子节点数组
    }

    // 添加子节点
    addChild(child) {
        this.children.push(child);
    }
}


function arrayToTree(arr){
    let root = null
    const map = new Map()
    function getFromMap(key){
        map.has(key) || map.set(key,new Node())
        return map.get(key)
    }
    
    for(const item of arr){
        const node = getFromMap(item.id)
        node.value = item.value
        if(item.parent === null){
            root = node
        }else{
            const pnode = getFromMap(item.parent)
            pnode.addChild(node)
        }
    }
    return root
}

const result = arrayToTree([
    {id: 1, value: 1, parent: null},
    {id: 2, value: 2, parent: 1},
    {id: 3, value: 3, parent: 2},
    {id: 4, value: 4, parent: 1}
])

console.log(result)