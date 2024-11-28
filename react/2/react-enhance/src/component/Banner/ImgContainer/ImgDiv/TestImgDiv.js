import React, { Component } from 'react'
import ImgDiv from './ImgDiv'
import src1 from '../img/1.jpg'
import src2 from '../img/2.webp'
import src3 from '../img/3.jpg'
import src4 from '../img/4.jpg'
import src5 from '../img/5.webp'

export default class TextImgDiv extends Component {
  render() {
    console.log(typeof src1)
    return (
      <div>
        <ImgDiv 
        imgSrc={[src1, src2, src3, src4,src5]}
        singleWidth={520}
        height= {280}
        />
      </div>
    )
  }
}
