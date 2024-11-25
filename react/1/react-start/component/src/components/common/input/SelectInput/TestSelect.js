import React, { Component } from 'react'
import getData from '../../../../services/getData'
import RadioInput from './SelectInput'
import SelectInput from './SelectInput'

export default class TestSelect extends Component {
    state = {
        data : [
            // {value: "football", text: "足球"},
            // {value: "basketball", text: "篮球"},
            // {value: "movie", text: "电影"}
        ],
        val: ""
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
        <SelectInput {...this.state} name="provinces" onChange={(value)=>{this.setState({val: value})}} />
        <button onClick={()=>{
            console.log(this.state.val)
        }}>获取文本框的值</button>
      </div>
    )
  }
}
