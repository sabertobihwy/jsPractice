import React, { Component } from 'react'
import { Consumer } from './ctx'
import PropTypes from 'prop-types'

export default class Input extends Component {

    static propTypes ={
        name: PropTypes.string.isRequired
    }

    handleChange = (name, value, providerValue)=>{
        providerValue.onChange(name,value)
    }

  render() {
    return (
      <Consumer>
        {value => {
            return (<input {...this.props}
                value={value.data[this.props.name] || ""} // 一开始是undefined，会认为是非受控组件
                onChange={(e)=>{this.handleChange(this.props.name,e.target.value,value)}}
            />)
            
            
        }}
      </Consumer>
    )
  }
}
