import React, { Component } from 'react'
import Type from '../../../../util/Type'
import PropTypes from 'prop-types'

export default class RadioInput extends Component {
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
