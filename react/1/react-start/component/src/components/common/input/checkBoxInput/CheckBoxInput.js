import React, { Component } from 'react'
import Type from '../../../../util/Type'
import PropTypes from 'prop-types'

export default class CheckBoxInput extends Component {
    
    static defaultProps = {
        chooseData: ['120000']
    }

    static propTypes  = {
        chooseData: Type.chooseData.isRequired,
        name: PropTypes.string.isRequired,
        onChange: Type.onChange
    }

    handleChange = (e)=>{
        let newArr = [] 
        if(e.target.checked){
            newArr = [...this.props.chooseData, e.target.value]
        }else{
            newArr = this.props.chooseData.filter(l => l !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }

    getCheckbox = (data)=>{
        return data.map((item)=> <label key={item.value}>
        <input type="checkbox" name={this.props.name} 
        checked = {this.props.chooseData.includes(item.value)}
        value={item.value} onChange={this.handleChange}  /> {item.text}
    </label>  )
    }

  render() {
    const list = this.getCheckbox(this.props.data)
    return (
      <div>
        {list}
      </div>
    )
  }
}
