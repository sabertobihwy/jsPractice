import React, { Component } from 'react'

export default class SelectInput extends Component {
    handleChange = (e)=>{
        this.props.onChange && this.props.onChange(e.target.value)
    }

    getOptions = (list)=> {
     return  list.map((item)=> 
      <option key={item.value} value={item.value} > {item.text} </option>)
    }
    render() {
        const list = this.getOptions(this.props.data)
        return (
            <select name={this.props.name} onChange={this.handleChange}>
              {list}
            </select>
        )
      }
}
