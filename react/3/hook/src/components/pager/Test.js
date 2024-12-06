import React from 'react'
import Pager from './Pager'
import { useState, useEffect } from 'react';

export default function Test() {
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [panelNumber, setPanelNumber] = useState(5)
    const [totalCount, setTotalCount] = useState()
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        (async function(){
            const params = {
                    page: page,
                    size: limit
            };
            const url = '/api/movies';
            const queryString = new URLSearchParams(params).toString(); // 生成 "page=2&size=10"
            const fullUrl = `${url}?${queryString}`;
            const arr = await fetch(fullUrl).then(resp=>resp.json()).then(resp=> resp.data)
            setTotalCount(arr.movieTotal)
            setMovies(arr.movieList.map(data => (<li>{data.title}</li>)))
        })()
    },[page,limit])
  return (
    <div>
        <ul>
        {
            movies.length === 0 ? 'loading...': movies
        }
        </ul>
        <input placeholder='set limit' type='number' onChange={(e)=>{ setLimit(e.target.value)}}/>
        <input placeholder='set panelNumber' type='number'  onChange={(e)=>{ setPanelNumber(e.target.value)}}/>
        {
            totalCount === undefined? "":  
                <Pager currPage={page} limit={limit} panelNumber={panelNumber} totalCount={totalCount} onClick={(e)=>{
                console.log(e.target.getAttribute("data-value"))
                setPage(+(e.target.getAttribute("data-value")))
              }}/>
        }
        
     
    </div>
  )
}
