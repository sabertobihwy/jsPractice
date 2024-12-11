const IncreaseAction = Symbol('increase')
const DecreaseAction = Symbol('decrease')

export {IncreaseAction,DecreaseAction}

export function getIncreaseAction(){
    return {
        type: IncreaseAction,
    }
}

export function getDecreaseAction(){
    return {
        type: DecreaseAction,
    }
}