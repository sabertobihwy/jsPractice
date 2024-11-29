import React from 'react'
import Form from './Form'

export default function Test() {
  return (
    <div>
      <Form onSubmit={datas => console.log(datas)}>
        账号：<Form.Input name="id" type="text"/>
        <br/>
        密码：<Form.Input name="pwd" type="password"/>
        <br/>
        <Form.Button> submit </Form.Button>
      </Form> 
    </div>
  )
}
