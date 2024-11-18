import React, { Component } from 'react'
import PagerList from './PagerList';
import Movie from './Movie';

export default class Comp extends Component {
    state = {
        current: this.props.current,
        limit: this.props.limit,
      //  totalCount: this.props.totalCount,
        digitNum: this.props.digitNum
    }
    constructor(props){
        super(props)
        this.getContent("/api/movies",this.state.current,this.state.limit)
    }
    async getContent(url,page,size){
        const params = {
          page: page,
          size: size
        };
        const queryString = new URLSearchParams(params).toString(); // 生成 "page=2&size=10"
        const fullUrl = `${url}?${queryString}`;
        const data = await fetch(fullUrl).then(resp=> resp.json()).then(obj => obj.data)
        this.setState({
            totalCount: data.movieTotal,
            listData : data.movieList,
            ok: true
        })
      }

    getMovieContent(){
        if(!this.state.ok){
            return (
                <div>
                    loading...
                </div>
            )
        }else{
            const arr = this.state.listData
            const movieLst = arr.map((item,i) => <Movie key={i} {...item}/>)
            return (<div>
                {movieLst}
            </div>
            )
        }
    }  

    handleChange = (target)=>{
        this.getContent("/api/movies",target,this.state.limit)
        this.setState({
            ok: false,
            current: target
        })
    }
    
  render() {
    const movieContent = this.getMovieContent()
    return (
      <div>
        {movieContent}
        <PagerList {...this.state} onChangePage={this.handleChange} />
      </div>
    )
  }
}
