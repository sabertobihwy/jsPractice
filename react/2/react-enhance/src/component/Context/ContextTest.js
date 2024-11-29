import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ctx = React.createContext({
    a: 123,
    b: 456
})
const ctx2 = React.createContext({
    a: 123
})

class ChildA extends Component{ 
    state = {
        a: 2,
        b: 2,
        onChange: (newNum)=>{
            this.setState({
                a: newNum + 1
            })
        }
    }
    render(){
        return  (
            <ctx2.Provider value={this.state}>    
                <ctx.Consumer>
                    {(value) => {
                        return (
                    <span> {value.a} 
                   
                            <ChildB />
                    
                    
                     </span>
                    )
                
                
                }}
                </ctx.Consumer>
            </ctx2.Provider>
        )
    }
}

class ChildB extends Component{ 

    render(){
        return (
            <>
            <ctx.Consumer>
                {(value)=>{return <>
                    <button onClick=
                        {()=>{value.onChange(value.a)}} >
                        {value.a} : CTX1.A </button>
                
                </>}} 
            </ctx.Consumer>
            <ctx2.Consumer>
                {(value)=>{return <>
                    <button onClick=
                        {()=>{value.onChange(value.a)}} >
                        {value.a} : CTX2.A </button>
                
                </>}} 
            </ctx2.Consumer>
            </>
        )  
    }
}



export default class ContextTest extends Component {
    state = {
        a: 1,
        onChange: (newNum)=>{
            this.setState({
                a: newNum + 1
            })
        }
    }

  render() {
    return (
        <ctx.Provider value={this.state}>
            <div>
                <ChildA /> 
            </div>
        </ctx.Provider>

    )
  }
}
