import {createAction} from 'redux-actions'

// const change = createActions({
//     CHANGE:(condition) => condition
// })

const change = createAction(
    'CHANGE', (condition) => condition
)


export default change