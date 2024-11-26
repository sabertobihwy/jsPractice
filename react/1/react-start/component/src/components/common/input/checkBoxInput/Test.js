import React, { Component } from 'react'
import CheckBoxInput from './CheckBoxInput'
import getData from '../../../../services/getData'

export default class Test extends Component {
    state = {
        data : [
            // {value: "football", text: "足球"},
            // {value: "basketball", text: "篮球"},
            // {value: "movie", text: "电影"}
        ],
        name: "hobby",

    }
  async componentDidMount(){
    const ProvinceLst = await getData()
    console.log(ProvinceLst)
    this.setState({
        data : ProvinceLst.map(item => {return {value: item.value, text: item.label}})
    })
  }  
  render() {
    return (
      <div>
        <CheckBoxInput {...this.state} onChange= 
         {(newArr)=>{this.setState({chooseData: newArr}   )}}
         />
        <button onClick={()=>{
            console.log(this.state.chooseData)
        }}>获取文本框的值</button>
      </div>
    )
  }
}
