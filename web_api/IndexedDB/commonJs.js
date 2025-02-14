async function addData(store, data, key){
    return new Promise((resolve,reject)=>{
        const r = store.add(data,key)
        r.onsuccess = (e)=>{
            resolve()
        }
        r.onerror = (e)=>{
            reject(e.target.error)
        }
    })
}
async function getAllData(store){
    return new Promise((resolve,reject)=>{
        const r = store.getAll()
        r.onsuccess = (e)=>{
            resolve(e.target.result)
        }
        r.onerror = (e)=>{
            reject(e.target.error)
        }
    })
}