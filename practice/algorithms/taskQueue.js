function processTasks(...tasks) {
    let index = 0;
    let isRunning = false;
    const result = []
    return {
        async start() {
            return new Promise(async (resolve, reject) => {
                if (isRunning) {
                    // 如果reject的话需要try-catch，不然会报错！
                    return
                }
                isRunning = true;
                for (let i = index; i < tasks.length; i++) {
                    if (isRunning) {
                        result.push(await tasks[i]())
                        index++;
                    } else {
                        return
                    }
                }
                resolve(result)
            })

        },
        pause() {
            isRunning = false;
        }
    }
}

const asyncTasks = ['task1', 'task2', 'task3', 'task4'].map((item, index) => {
    return async function () {
        return new Promise((resolve) => {
            console.log('start' + item)
            setTimeout(() => {
                console.log('end' + item)
                resolve(item)
            }, (index + 1) * 1000)
        })
    }
})

const p = processTasks(...asyncTasks)
p.start()

setTimeout(() => {
    p.pause()
}, 1500)

// p.pause()

// p.start()