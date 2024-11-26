import React, { Component } from 'react'

export function LoggerWapper(Comp){
    return class withLog extends Component {

        componentDidMount(){
            console.log("start")
        }
        componentWillUnmount(){
            console.log("end")
        }

        render() {
          return (
            <>
              <Comp {...this.props}/>
            </>
          )
        }
      }
}


