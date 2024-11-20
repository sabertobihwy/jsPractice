import React, { Component } from 'react'
import imgsrc from '../../../assets/pic.jpg'
import Modal from './Modal'

export default class ModelTest extends Component {
    state = {
        showModal : true
    }

    closeModal = ()=> {
        this.setState({
            showModal: false
        })
    }

    showModal = ()=>{
        this.setState({
            showModal: true
        })
    }
  render() {
    return ( 
      <div>
        <img src={imgsrc} alt=''></img>
        {this.state.showModal ?
           (<Modal onClick={this.closeModal} style = {{"background-color": "rgba(0, 0, 0, 0.5)"}}>
                <h1>{this.props.text}</h1>
                <button onClick={this.closeModal}>关闭蒙层</button>
        </Modal>) : 
        <>
         <button onClick={this.showModal}>开启蒙层</button>
        </>
         }
        
      </div>
    )
  }
}
