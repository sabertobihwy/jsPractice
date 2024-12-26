import store from "./redux/store";
import { increase,decrease,asyncDecrease,asyncIncrease } from "./redux/action/counter";

window.increase = ()=>{
    store.dispatch(increase())
}

window.decrease = ()=>{
    store.dispatch(decrease())
}

window.asyncDecrease = ()=>{
    store.dispatch(asyncDecrease())
}

window.asyncIncrease = ()=>{
    store.dispatch(asyncIncrease())
}