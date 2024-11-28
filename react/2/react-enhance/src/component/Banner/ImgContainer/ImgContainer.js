import React, { Component } from 'react'
import ImgDiv from './ImgDiv/ImgDiv'
import src1 from './img/1.jpg'
import src2 from './img/2.webp'
import src3 from './img/3.jpg'
import src4 from './img/4.jpg'
import src5 from './img/5.webp'
import './index.css'
import PropTypes from 'prop-types'
import SwitchArrow from '../SwitchArrow/SwitchArrow'
import SwitchDots from '../SwitchDots/SwitchDots'

export default class ImgContainer extends Component {
    static defaultProps = {
        imgSrc : [src1, src2, src3, src4, src5],
        autoInterval: 2500
    } 
    static propTypes= {
      //  imgSrc : PropTypes.arrayOf(PropTypes.string)
      autoInterval: PropTypes.number
    }
    state = {
        currIndex: 0
    }
    handleSwitch = (num)=>{
        if(num < 0){
            num =  this.props.imgSrc.length-1
        }else if(num > this.props.imgSrc.length-1 ){
            num = 0
        }
        this.div.switchTo(this.state.currIndex,num)
        this.setState({currIndex:num})
    }
    refFunc = (el)=>{
        this.div = el
    }

    timer = null

    autoSwitch = ()=>{
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
           this.handleSwitch(this.state.currIndex+1)
        },this.props.autoInterval)
    }

    componentDidMount(){
        this.autoSwitch()
    }
    stopTimer = ()=>{
        clearInterval(this.timer)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

  render() {
    return (
        <>
         <div className='ImgContainer'> 
            <ImgDiv ref={this.refFunc}
                imgSrc={this.props.imgSrc}
                singleWidth={520}
                height= {280}
                currIndex={this.state.currIndex}
                stopTimer={this.stopTimer}
                startTimer={this.autoSwitch}
            />
            <SwitchArrow currIndex={this.state.currIndex} handleSwitch={this.handleSwitch}/>  
            <SwitchDots totalDots={this.props.imgSrc.length}
            currIndex={this.state.currIndex}
            handleSwitch={this.handleSwitch}
            /> 
        </div>
      </>

    )
  }
}
