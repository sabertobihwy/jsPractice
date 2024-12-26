import {createActions} from 'redux-actions'

const {asyncIncrease, asyncDecrease, increase, decrease} =  createActions({
    ASYNC_INCREASE: () => 0,
    ASYNC_DECREASE: () => 0,
    INCREASE: () => 1,
    DECREASE: () => -1,
})

// function increase(){
//     return {
//         type: 'INCREASE'
//     }
// }

// function decrease(){
//     return {
//         type: 'DECREASE'
//     }
// }

export {asyncIncrease, asyncDecrease,increase, decrease}