import React, { Component } from 'react'
import { getRandom } from '../util/tools'
import Circle from './Circle'

export default class CircleList extends Component {
    state = {
        infoes : []
    }

    constructor(props){
        super(props)
        setInterval(()=>{
            const newInfo = {
                left : getRandom(0, document.documentElement.clientWidth - 100),
                top : getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 400),
                ySpeed: getRandom(50, 400),
                color: `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
            }
            this.setState({
                infoes : [...this.state.infoes, newInfo]
            })
        }, 1000)
    }

  render() {
    const list = this.state.infoes.map((item,i)=><Circle key={i} {...item}/>)
    return (
      <div>
        {list}
      </div>
    )
  }
}
