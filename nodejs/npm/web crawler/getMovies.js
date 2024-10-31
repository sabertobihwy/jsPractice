const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

async function getMoviesHtml() {
    const resp = await axios.get("https://movie.douban.com/chart")
    return resp.data
}

async function getMovies() {
    const movies = []
    const html = await getMoviesHtml()
    const $ = cheerio.load(html)
    // fs.writeFile('html.txt', html, (err) => {
    //     if (err) {
    //         return console.error('Error writing file:', err);
    //     }
    //     console.log('File written successfully!');
    // });
    const arr = $('tr.item')
    // console.log(arr.text())
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        movies.push(handleItem($(item)))
    }
    return movies
}

function handleItem(itemDom) {
    const p = itemDom.find('.pl2')
    const name = p.find('a').text().split('/')[0].replace(/\s/g, '')
    const desc = p.find('p.pl').text().replace(/\s/g, '')
    const star = p.find('.star.clearfix').find('.rating_nums').text()
    return {
        name, desc, star
    }
}

getMovies().then(movies => {
    // movies.forEach(mov => { console.log(mov) })
    fs.writeFile('html.txt', JSON.stringify(movies), (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log('File written successfully!');
    });

})
