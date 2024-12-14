const IncreaseAction = Symbol('increase')
const UserAddAction = Symbol('userAdd')
export {IncreaseAction,UserAddAction}

export function getIncreaseAction(){
    return {
        type: IncreaseAction,
        payload: 1
    }

}

export function getUserAddAction(user){
    return {
        type: UserAddAction,
        payload: user
    }
}