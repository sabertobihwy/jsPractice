// export async function fetchCities(){
//     const resp = await fetch('/api/citylist')
//     const data = await resp.json()
//     return data.data 
// }

function thunkMiddleWare(){
    return store => next => action => {
        if(typeof action === 'function'){
            action(store.dispatch, store.getState)
        }else{
            next(action)
        }
    }
}
const thunk = thunkMiddleWare()
export default thunk