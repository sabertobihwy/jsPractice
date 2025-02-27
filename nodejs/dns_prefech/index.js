const { glob } = require('glob')
const { parse } = require('node-html-parser')
const path = require('path')
const fs = require('fs')

const urls = new Set()

async function extractUrl() {
    const files = await glob('dist/**/*.{js,html,css}')
    // console.log(files.length)
    files.forEach((file) => {
        const html = fs.readFileSync(file, 'utf-8')
        const matches = html.match(new RegExp(`https?://[^\s"']+`, 'g'))
        //console.log(matches)
        if (matches) {
            matches.forEach((url) => {
                const match = url.match(new RegExp(`(https?://[^\s"'/]+)`))
                match && urls.add(match[1])
            })
        }

    })
    //console.log(urls)

}

async function insertIntoHtml() {
    //console.log(urls)
    const script = [...urls].map(url => `<link ref="dns-prefetch" href="${url}" />`).join('\n')
    console.log(script)
    const files = await glob('dist/**/*.html')
    console.log(files[0])
    const filePath = path.resolve(__dirname, files[0])
    const file = fs.readFileSync(filePath, 'utf-8')
    const dom = parse(file)
    const head = dom.querySelector('head')
    head.insertAdjacentHTML("afterbegin", script)
    fs.writeFileSync(filePath, dom.toString())
}

(async function () {
    await extractUrl()
    await insertIntoHtml()
})()

