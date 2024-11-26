import React, { Component } from 'react'
import ThreeLayout from './components/common/ThreeLayout/ThreeLayout'
import Input from './components/common/input/Input'
import NumberInput from './components/common/input/NumberInput'
import Form from './components/common/input/Form'
import Test from './components/common/input/checkBoxInput/Test'
import TestRadio from './components/common/input/radioInput/TestRadio'
import TestSelect from './components/common/input/SelectInput/TestSelect'

import {LoggerWapper} from "./HOC/withLog"
import {A,B} from "./components/A"
import {withLogin,withLogAndLogin} from "./HOC/withLogin"

// debugger

const LogA = LoggerWapper(A)
const LogB = LoggerWapper(B)

const LoginA = withLogin(LogA)
const LoginB = withLogin(LogB)

const LogAndLoginA = withLogAndLogin(A)
export default class App extends Component {

  render() {


    return (
      <>
        {/* <ThreeLayout gap={20}/> */}
        {/* <Input /> */}
        {/* <NumberInput /> */}
        {/* <Form /> */}
        <Test />
        <hr/>
        <TestRadio />
        <hr/>
        <TestSelect />

        {/* <TestSelect /> */}
        {/* <LoginA isLogin={true} a={1} />
        <LoginB a={2} /> */}
        {/* <LogAndLoginA isLogin={false} a={1}/> */}
      </>
    )
  }
}
