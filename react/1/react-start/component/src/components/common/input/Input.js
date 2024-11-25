import React, { Component } from 'react'

export default class Input extends Component {
    state = {
        val : "",
        checked : false,
        options: ["马超","玄策","百里"],
        chooseOptions: []
    }
  render() {
    const opts = this.state.options.map((item)=><label key={item}><input type='checkbox' value={item} 
    checked = {this.state.chooseOptions.includes(item)}
    onChange = {(e)=>{
        if(e.target.checked){
            this.setState({chooseOptions: [...this.state.chooseOptions, item]})
        }else{
            this.setState({chooseOptions: this.state.chooseOptions.filter(l => l!== item)})
        }
    }}
        
    ></input>{item}</label>)
    return (
      <div>
        <input type="text" value={this.state.val} onChange={
            (e)=>
            {this.setState({val: e.target.value
            })}} />
        <input type="checkbox" checked={this.state.checked} onChange={
            (e)=>
            {this.setState({checked: e.target.checked
            })}} />    
        <button onClick={()=>{
            console.log(this.state.val)
        }}>获取文本框的值</button>
        <p>
            {opts}
        </p>

      </div>
      
    )
  }
}
