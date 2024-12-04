import React from 'react'
import PropTypes from 'prop-types'
import './page.css'

function getMaxPage(limit, totalCount){
    return Math.ceil(totalCount / limit)
}
function getMaxDigit(currPage, panelNumber, maxPage){
    const maxDigit = currPage + Math.floor(panelNumber/ 2)
    return maxDigit > maxPage ? maxPage: maxDigit
}
function getMinDigit(currPage, panelNumber){
    const minDigit = currPage - Math.floor(panelNumber/ 2)
    return minDigit > 1 ? minDigit: 1
}

export default function Pager(props) {
    const maxPage = getMaxPage(props.limit, props.totalCount)
    const maxDigit = getMaxDigit(props.currPage, props.panelNumber, maxPage)
    const minPage = getMinDigit(props.currPage, props.panelNumber)
    const arr = []
    for(let i= minPage; i<=maxDigit; i++){
        arr.push((<span key={i} onClick={props.onClick} data-value={i} className={props.currPage === i? "page active": "page" }>{i}</span>))
    }
    // console.log(arr)
  return (
    <div className="pagination">
        <span className={props.currPage === 1? "page disable": "page"} data-value={1} onClick={props.onClick}>首页</span>
        <span className={props.currPage === 1? "page disable": "page"} data-value={props.currPage-1} onClick={props.onClick}>上一页</span>
        {arr}
        <span className={props.currPage === maxPage? "page disable": "page"} data-value={props.currPage+1} onClick={props.onClick}>下一页</span>
        <span className={props.currPage === maxPage? "page disable": "page"} data-value={maxPage} onClick={props.onClick}>尾页</span>
    </div>
  )
}

Pager.propTypes = {
    currPage: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    panelNumber: PropTypes.number,
    totalCount: PropTypes.number.isRequired
}

