function addEvent(ele, eventName, handler) {
    if (ele.addEventListener) {
        addEvent = (ele, eventName, handler) => {
            ele.addEventListener(eventName, handler)
        }
    } else if (ele.attachEvent) {
        addEvent = (ele, eventName, handler) => {
            ele.attachEvent('on' + eventName, handler)
        }
    } else {
        addEvent = (ele, eventName, handler) => {
            ele['on' + eventName] = handler
        }
    }
    addEvent(ele, eventName, handler)
}

const addEvent2 = (function () {
    if (window.addEventListener) {
        return (ele, eventName, handler) => {
            ele.addEventListener(eventName, handler)
        }
    } else if (window.attachEvent) {
        return (ele, eventName, handler) => {
            ele.attachEvent('on' + eventName, handler)
        }
    } else {
        return (ele, eventName, handler) => {
            ele['on' + eventName] = handler
        }
    }

})()