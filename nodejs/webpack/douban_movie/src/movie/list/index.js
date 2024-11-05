import styles from './list.module.less'
import axios from "axios"
import $ from "jquery"

let container
// 1. create container dom
function init(){

    container = $('<div>').addClass(styles.container).appendTo('#app')
}
init()
// 2. export page_data function 
export async function page_data(page, limit){
    const resp = await axios.get('/api//movies',{
        params: {
            page,
            size: limit
        }
    })
    const result = resp.data.data
    const content = result.movieList.map(item => `<div>
        <img src="${item.cover}"/>
        <a href="${item.url}">${item.title}</a>
        <span>${item.rate}</span>
        </div>`).join('')
    // console.log(content)    
    container.html(content)
    return result.movieTotal
}