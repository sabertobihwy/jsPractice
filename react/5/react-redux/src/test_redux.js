import store from "./redux/store";
import { increase,decrease,asyncDecrease,asyncIncrease } from "./redux/action/counter";
import change from './redux/action/movies/condition'
import { fetchMovies } from "./redux/action/movies/result";

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

window.changeCondition = (condition)=>{
    store.dispatch(change(condition))
}

window.fetchMovies = () =>{
    store.dispatch(fetchMovies())
}