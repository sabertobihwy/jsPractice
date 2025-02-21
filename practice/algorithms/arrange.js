function arrange(str) {
    const q = []
    q.push(async () => {
        return Promise.resolve(`${str} is notified`).then(console.log)
    })
    return {
        execute: async function () {
            for (const f of q) {
                await f()
            }
        },
        do: function (str) {
            q.push(async () => {
                return Promise.resolve(`Start to ${str}`).then(console.log)
            })
            return this
        },
        wait: function (time) {
            q.push(async () => {
                return new Promise((resolve) => {
                    console.log(`wait ${time}s `)
                    setTimeout(() => {
                        resolve()
                    }, time * 1000)
                })

            })
            return this
        },
        waitFirst: function (time) {
            q.unshift(async () => {
                return new Promise((resolve) => {
                    console.log(`wait ${time}s `)
                    setTimeout(() => {
                        resolve()
                    }, time * 1000)
                })
            })
            return this
        }

    };
}

//arrange('Willian').execute()
//arrange('Willian').do('commit').execute()
//arrange('Willian').wait(5).do('commit').execute()
arrange('Willian').waitFirst(5).do('push').execute()