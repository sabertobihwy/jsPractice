import React, { Component } from 'react'
import getData from '../../../../services/getData'
import RadioInput from './SelectInput'
import SelectInput from './SelectInput'
import GroupSelectComp from './SelectInput'

export default class TestSelect extends Component {
    state = {
      groupDatas : [
            // {value: "football", text: "足球"},
            // {value: "basketball", text: "篮球"},
            // {value: "movie", text: "电影"}
        ],
        name: "province",
        chooseData: ['120000'],
        isSelect: true
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
        {/* <SelectInput {...this.state} name="provinces" onChange={(value)=>{this.setState({val: value})}} /> */}
        <GroupSelectComp {...this.state} onChange={(arr)=>{this.setState({chooseData: arr})}} />
        <button onClick={()=>{
            console.log(this.state.chooseData[0])
        }}>获取文本框的值</button>
      </div>
    )
  }
}
