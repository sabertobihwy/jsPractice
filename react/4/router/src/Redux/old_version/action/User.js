const addAction = Symbol('add')
const delAction = Symbol('del')

export {addAction,delAction}

export function getAddAction(user){
    return {
        type: addAction,
        payload: user
    }
}
export function getDelAction(id){
    return {
        type: delAction,
        payload: id
    }
}