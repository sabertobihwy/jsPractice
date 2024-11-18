import React, { Component } from 'react'
import Pager from './Pager'

export default class PagerList extends Component {
    state = {
        current: this.props.current,
        limit: this.props.limit,
        totalCount: this.props.totalCount,
        digitNum: this.props.digitNum
    }
    
    getTotalPage(){
        return Math.ceil(this.state.totalCount / this.state.limit) 
    }

    changePage = (target)=>{
        if(this.state.current === target){
            return 
        }
        this.setState({
            current: target
        })
        this.props.onChangePage && this.props.onChangePage(target)
    }
    getMinDigit(){
        let min = this.state.current - Math.floor(this.state.digitNum / 2)
        if(min < 1){
            min = 1
        }
        return min
    }   

    getMaxDigit(totalPage){
        let max = this.state.current + Math.floor(this.state.digitNum/2)
        if(max > totalPage){
            max = totalPage
        }
        return max
    }

  render() {
    const totalPage = this.getTotalPage()
    const min = this.getMinDigit()
    const max = this.getMaxDigit(totalPage)
    const digitArr = []
    for(let i = min; i<= max; i++){
        digitArr.push(<Pager key={i} className={this.state.current === i ? "item active": "item"} text={i}  onClick={()=>{this.changePage(i)}}/>)
    }
    return (
      <div>
        <Pager className={this.state.current === 1 ? "item disabled": "item"} text="首页" onClick={()=>{this.changePage(1)}}/>
        <Pager className={this.state.current === 1 ? "item disabled": "item"} text="上一页"  onClick={()=>{this.changePage(this.state.current - 1)}}/>
        {digitArr}
        <Pager className={this.state.current === totalPage ? "item disabled": "item"} text="下一页"  onClick={()=>{this.changePage(this.state.current + 1)}}/>
        <Pager className={this.state.current === totalPage ? "item disabled": "item"} text="尾页"  onClick={()=>{this.changePage(totalPage)}}/>
      </div>
    )
  }
}
