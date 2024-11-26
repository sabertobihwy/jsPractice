import React, { Component } from 'react'
import Type from '../../../../util/Type'
import PropTypes from 'prop-types'
import InputWrapper from '../../hoc/InputWrapper'


export class singleRadioInput extends Component {
    static defaultProps = {
    }

    static propTypes  = {
        info: Type.singleData.isRequired,
        name: PropTypes.string.isRequired,
        onChange: Type.onChange,
        isChosen: PropTypes.bool
    }
    handleChange = (e)=>{
        this.props.onChange && this.props.onChange(e.target.checked,e.target.value,e.target.type)
    }
    render() {
        return (
          <>
            <input type="radio" name={this.props.name} 
            checked = {this.props.isChosen}
            value={this.props.info.value} onChange={this.handleChange}  /> 
            {this.props.info.text}
          </>
        )
      }
}
export default InputWrapper(singleRadioInput)

export  class RadioInput extends Component {
    static defaultProps = {
        val : "120000"
    }

    static propTypes  = {
        val: PropTypes.string,
        name: PropTypes.string.isRequired,
        onChange: Type.onChange
    }

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
