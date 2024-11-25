import React, { Component } from 'react'

export default class RadioInput extends Component {
    handleChange = (e)=>{
        this.props.onChange && this.props.onChange(e.target.value)
    }
    render() {
        const list = this.props.data.map((item)=> <label key={item.value}>
            <input type="radio" name={this.props.name} 
            checked = {this.props.val === item.value}
            value={item.value} onChange={this.handleChange}  /> {item.text}
        </label>  )
        return (
          <div>
            {list}
          </div>
        )
      }
}
