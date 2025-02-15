importScripts('https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.2/spark-md5.min.js')
onmessage = function(e){
   // console.log('in')
    const result = {}
    const {worker_arr, CHUNK_SIZE, buffer} = e.data
    // console.log(e.data)
    worker_arr.forEach((i)=>{
        const startIndex = +i * CHUNK_SIZE
        const endIndex = startIndex + CHUNK_SIZE
        const chunkSlice = buffer.slice(startIndex, endIndex)
        result[i] = {
            startIndex,
            endIndex,
            chunkSlice,
            hash : SparkMD5.ArrayBuffer.hash(chunkSlice)
        }
    })
    postMessage(result)
}

