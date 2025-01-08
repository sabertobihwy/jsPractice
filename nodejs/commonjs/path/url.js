const URL = require('url')
const url = new URL.URL('https://taobao.com?a=1&b=2')
console.log(url)

console.log(new URL.URLSearchParams('?a=1&b=2'))

const u = require('node:url')
const obj = {
      protocol: 'https',
      hostname: 'example.com',
      pathname: '/some/path',
      query: {
         page: 1,
         format: 'json',
       },
     }

console.log(u.format(obj))