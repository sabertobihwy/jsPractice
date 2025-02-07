/**
 *  链式调用，5秒后输出file First, 3秒后输出file，直到.execute()才会执行
 */
arrange('file')
    .print(3)
    .printFirst(5)
    .execute()


function arrange(str){
    const tasks = []
    function print(duration){
        tasks.push(()=> new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(str)
                resolve()
            },duration * 1000)
        }))
        return this 
    }
    function printFirst(duration){
        tasks.unshift(()=> new Promise((resolve)=>{
            setTimeout(()=>{
                console.log(str+'First')
                resolve()
            },duration * 1000)
        }))
        return this
    }
    function execute(){
        (async function(){
            for(let task of tasks){
                await task()
            }
        })()
        return this
    }

    return {
        print,
        printFirst,
        execute
    }

}
