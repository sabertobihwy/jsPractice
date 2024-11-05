import $ from "jquery"
import styles from './pager.module.less'
import {page_data} from "@/movie/list"

let container
// 1. dom
function init(){

    container = $('<div>').addClass(styles.container).appendTo('#app')
}
init()
// 2. export generate_pager()
//      getPager(text,status,page), add to dom 

export async function generate_pager(currentPage, pageSize, totalCount){
    container.empty()
    function getPager(text,status,page){
        // 1. add dom   
        let span = $('<span>').addClass(styles[status]).text(text).appendTo(container)
       // console.log(span)
        // 2. click event 
        span.on('click',async function(){
            // 1. content regenerate
            const totalCount = await page_data(page,pageSize)
            // 2. pager regenerate
            generate_pager(page,pageSize,totalCount)
        })
    }
    let totalPage = Math.ceil(totalCount / pageSize )

    // first page 
    getPager('|<<', currentPage === 1? 'disable':"",1)
    // prev page
    getPager('<<', currentPage === 1? 'disable':"",currentPage-1)
    // digit pages 
    let digits = 10 
    let min = Math.floor(currentPage - digits / 2)
    min < 1 && (min = 1)
    let max = Math.ceil(currentPage + digits / 2)
    max > totalPage && (max = totalPage)
    for(let i = min; i<= max; i++){
        getPager(i, currentPage === i ? 'active':"", i)
    }
    // next page 
    getPager('>>', currentPage === totalPage? 'disable':"",currentPage+1)
    // last page
    getPager('>>|', currentPage === totalPage? 'disable':"",totalPage)

}