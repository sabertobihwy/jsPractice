import React from 'react'
import Type from '../../../util/Type'
import PropTypes from 'prop-types'

export default function InputWrapper(Comp) {
  return class extends React.Component{

    static defaultProps = {
        chooseData: [],
        isSelect: false
    }
    static propTypes  = {
        groupDatas: Type.groupDatas.isRequired,
        onChange: Type.onChange,
        name: PropTypes.string.isRequired,
        chooseData: Type.chooseData,
        isSelect: PropTypes.bool
    }
    handleChange = (isChosen,value,type)=>{
        let newArr = []
        if(isChosen){
            if(type === 'checkbox'){
                newArr = [...this.props.chooseData, value]
            }else if(type === 'radio'){
                newArr = [value]
            }
        }else{
            newArr = this.props.chooseData.filter(l => l!== value)
        }
        this.props.onChange && this.props.onChange(newArr)
    }

    handleSelectChange = (e)=>{
        this.props.onChange && this.props.onChange(new Array(e.target.value))
    }

    render(){
        const list = this.props.groupDatas.map((info) => 
            <label key={info.value}>
            <Comp 
            info={info} name={this.props.name} 
            onChange={this.handleChange} 
            isChosen={this.props.chooseData.includes(info.value)}
            />
            </label>)
        if(this.props.isSelect){
            return (
                <div>
                    <select name={this.props.name} onChange={this.handleSelectChange} value={this.props.chooseData[0]}>
                        {list}
                    </select>
                </div>)
        }    
        return (
        <div>
            {list}
        </div>)
    }
  }
}
