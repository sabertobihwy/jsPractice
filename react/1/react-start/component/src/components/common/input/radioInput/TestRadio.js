import React, { Component } from 'react'
import getData from '../../../../services/getData'
import RadioInput from './RadioInput'
import GroupRadioComp from './RadioInput'

export default class TestRadio extends Component {
    state = {
      groupDatas : [
            // {value: "football", text: "足球"},
            // {value: "basketball", text: "篮球"},
            // {value: "movie", text: "电影"}
        ],
        name: "province",
        chooseData: []
    }
  async componentDidMount(){
    const ProvinceLst = await getData()
    console.log(ProvinceLst)
    this.setState({
      groupDatas : ProvinceLst.map(item => {return {value: item.value, text: item.label}})
    })
  }  
  render() {
    return (
      <div>
        {/* <RadioInput {...this.state} name="provinces" onChange={(value)=>{this.setState({val: value})}} /> */}
        <GroupRadioComp {...this.state} onChange= 
         {(newArr)=>{this.setState({chooseData: newArr}   )}}
         />
        <button onClick={()=>{
            console.log(this.state.chooseData[0])
        }}>获取文本框的值</button>
      </div>
    )
  }
}
