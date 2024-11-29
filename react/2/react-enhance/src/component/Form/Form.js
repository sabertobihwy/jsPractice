import React, { Component } from 'react'
import { Provider } from './ctx'
import Input from './Input'
import Button from './Button'
import PropTypes from 'prop-types'

export default class Form extends Component {
    state = {
        data:{},
        onSubmit: this.props.onSubmit,
        onChange: (name,value)=>{
            this.setState({
                data: {...this.state.data, [name]:value}
            })
        }
    }

    static propTypes ={
        onSubmit: PropTypes.func
    }

  render() {
    return (
      <>
       <Provider value={this.state}>
            {this.props.children}
       </Provider>
      </>
    )
  }
}

Form.Input = Input
Form.Button = Button