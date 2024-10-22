const url = "https://xxx"

function* task() {
    let result = yield 1
    console.log(result)
    let resp = yield fetch(url) // Promise<Response>
    console.log(resp)
    let data = yield resp.json() // Promise<Object>
    console.log(data)
}


run(task)

// 达成await的效果，实现异步任务
function run(generatorFunc) {
    const g = generatorFunc()
    let result = g.next() // value:1 done:false 
    handleResult()
    function handleResult() {
        if (!result.done) {
            // Promise，则异步处理
            if (typeof result.value.then === 'function') {
                // value:Promise<> done:false 
                result.value.then((data) => {
                    result = g.next(data)
                    handleResult()
                }, (reason) => {
                    g.throw(reason) // ? 
                })
                // 普通数据，直接返回，调用下一个
            } else {
                result = g.next(result.value) // 下一个yield的结果
                handleResult()
            }
        }
    }


}


