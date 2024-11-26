import {LoggerWapper} from "./withLog"

export function withLogin(Comp){
    return function (props){
        if(props.isLogin){
            return <Comp {...props}></Comp>
        }else{
            return null
        }
    }
}

export function withLogAndLogin(Comp){
    return function (props){
        const LogWapper = LoggerWapper(Comp)
        if(props.isLogin){
            return <LogWapper {...props}></LogWapper>
        }else{
            return null
        }
    }
}