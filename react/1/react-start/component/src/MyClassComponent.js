import React from 'react'

export default class MyClassComp extends React.Component{

    // constructor(props){
    //     super(props)
    // }
    render(){
        if(this.props.obj){
            return <h1>类组件: {this.props.obj.a}</h1>
        }
        if(this.props.ui){
            return (
                <>
                {this.props.ui}
                </>
            )
        }
        return <h1>类组件: {this.props.number}</h1>
    }
}