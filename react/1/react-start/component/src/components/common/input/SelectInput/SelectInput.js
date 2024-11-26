import React, { Component } from 'react'
import Type from '../../../../util/Type'
import PropTypes from 'prop-types'
import InputWrapper from '../../hoc/InputWrapper'


export class SingleSelectInput extends Component {
  static defaultProps = {
  }

  static propTypes  = {
    info: Type.singleData.isRequired,
    onChange: Type.onChange,
  }

    // handleChange = (e)=>{
    //   console.log(e.target.type)
    //   this.props.onChange && this.props.onChange(e.target.checked,e.target.value,e.target.type)
    // }

    render() {
        return (
          <option value={this.props.info.value} > {this.props.info.text} </option>
        )
      }
}

export default InputWrapper(SingleSelectInput)


export  class SelectInput extends Component {
  static defaultProps = {
    val : "120000"
  }

  static propTypes  = {
    data: Type.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    onChange: Type.onChange
  }

    handleChange = (e)=>{
        this.props.onChange && this.props.onChange(e.target.value)
    }

    getOptions = (list)=> {
     return  list.map((item)=> 
      <option key={item.value} value={item.value} > {item.text} </option>)
    }
    render() {
      // debugger
        const list = this.getOptions(this.props.data)
        return (
            <select name={this.props.name} onChange={this.handleChange} value={this.props.val}>
              {list}
            </select>
        )
      }
}
