import React, { Component } from 'react'

export default class CheckBoxInput extends Component {
    handleChange = (e)=>{
        let newArr = [] 
        if(e.target.checked){
            newArr = [...this.props.chooseData, e.target.value]
        }else{
            newArr = this.props.chooseData.filter(l => l !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }
  render() {
    const list = this.props.data.map((item)=> <label key={item.value}>
        <input type="checkbox" name={this.props.name} 
        checked = {this.props.chooseData.includes(item.value)}
        value={item.value} onChange={this.handleChange}  /> {item.text}
    </label>  )
    return (
      <div>
        {list}
      </div>
    )
  }
}
