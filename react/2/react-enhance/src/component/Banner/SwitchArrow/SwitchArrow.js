import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'


export default class SwitchArrow extends Component {

    static propTypes= {
        currIndex: PropTypes.number.isRequired,
        handleSwitch: PropTypes.func.isRequired
    }
    HandleChange = (toNum)=>{
        this.props.handleSwitch(toNum)
    }

  render() {
    return (
        <>       
              <div className='arrow less'>
                <span className="arrowText"
                onClick={()=>{this.HandleChange(this.props.currIndex-1)}}
                >{'<'}</span>
            </div>
            <div className='arrow greater'>
                <span className="arrowText"
                onClick={()=>{this.HandleChange(this.props.currIndex+1)}}
                > {'>'}</span>
          </div>
        
         </>

    )
  }
}
