import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        loginId: "",
        loginPwd: "",
        sex: 'male',
        chooseLoves: [],
        loves: [
            {value: "football", text: "足球"},
            {value: "basketball", text: "篮球"},
            {value: "movie", text: "电影"}
        ]
    }
    handleChange = (e)=>{
        const name = e.target.name
        if(name === 'loves'){
            if(e.target.checked){
                this.setState({chooseLoves: [...this.state.chooseLoves, e.target.value]})
            }else{
                this.setState({chooseLoves: this.state.chooseLoves.filter(l => l!== e.target.value)})
            }
        }else{
            this.setState({
                [name]: e.target.value
            })
        }
        
    }
  render() {
    const opts = this.state.loves.map((item)=><label key={item.value}>
        <input name='loves' type='checkbox' value={item.value} 
        onChange={this.handleChange}  
        checked={this.state.chooseLoves.includes(item.value)} /> {item.text}
        </label>)
    return (
      <div>
        <p>
            <label><input name="loginId" type='text' value={this.state.loginId} onChange={this.handleChange} /></label>
            <label><input name="loginPwd" type='password' value={this.state.loginPwd} onChange={this.handleChange} /></label>
            <label>
                <input name="sex" type='radio' value='male' checked={this.state.sex === 'male'}  onChange={this.handleChange}/> male
                <input name="sex" type='radio' value='female' checked={this.state.sex === 'female'} onChange={this.handleChange}/> female
            </label>

        </p>
        <p>
            {opts}
        </p>
        <p>
            <button onClick={(e)=>{
                console.log(this.state)
            }}>getValue</button>
        </p>
      </div>
    )
  }
}
