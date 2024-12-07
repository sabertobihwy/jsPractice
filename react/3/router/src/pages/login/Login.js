import React from 'react'

export default function Login() {
  return (
    <div>
      <label for='id'>
        账号：<input name="id" type='text'></input>
      </label>
      <br/>
      <label for='pwd'>
        密码：<input name="pwd" type='password'></input>
      </label>
      <br/>
      <button> 提交</button>
    </div>
  )
}
