const IncreaseAction = 'increase'
const UserAddAction = 'userAdd'
const IsLoadingAction = 'isloading'
const AddCitiesAction = 'addCities'

export {IncreaseAction,UserAddAction,IsLoadingAction,AddCitiesAction}

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

export function getIsLoadingAction(isLoad){
    return {
        type: IsLoadingAction,
        payload: isLoad
    }
}

export function getCitiesAction(list){
    return {
        type: AddCitiesAction,
        payload: list
    }
}