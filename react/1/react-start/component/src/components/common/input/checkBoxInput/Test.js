import React, { Component } from 'react'
import GroupCheckboxComp from './CheckBoxInput'
import getData from '../../../../services/getData'

export default class Test extends Component {
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
        {/* <CheckBoxInput {...this.state} onChange= 
         {(newArr)=>{this.setState({chooseData: newArr}   )}}
         /> */}
         <GroupCheckboxComp {...this.state} onChange= 
         {(newArr)=>{this.setState({chooseData: newArr}   )}}
         />
        <button onClick={()=>{
            console.log(this.state.chooseData)
        }}>获取文本框的值</button>
      </div>
    )
  }
}
