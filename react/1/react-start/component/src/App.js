import React, { Component } from 'react'
import ThreeLayout from './components/common/ThreeLayout/ThreeLayout'
import Input from './components/common/input/Input'
import NumberInput from './components/common/input/NumberInput'
import Form from './components/common/input/Form'
import Test from './components/common/input/checkBoxInput/Test'
import TestRadio from './components/common/input/radioInput/TestRadio'
import TestSelect from './components/common/input/SelectInput/TestSelect'

// debugger
export default class App extends Component {
  render() {
    return (
      <>
        {/* <ThreeLayout gap={20}/> */}
        {/* <Input /> */}
        {/* <NumberInput /> */}
        {/* <Form /> */}
        {/* <Test /> */}
        {/* <TestRadio /> */}

        <TestSelect />
      </>
    )
  }
}
