const myPlugin = {

    curry: function (func) {
        var args = Array.prototype.slice.call(arguments, 1)
        var that = this
        return function () {
            var args2 = Array.from(arguments)
            var totalArgs = args.concat(args2)
            if (totalArgs.length < func.length) {
                // return curry 
                totalArgs.unshift(func)
                return that.curry.apply(that, totalArgs)
            } else {
                // invoke func
                return func.apply(null, totalArgs)
            }

        }
    },
    pipe: function () {
        var funcs = Array.from(arguments)
        return function (val) {
            for (let func of funcs) {
                val = func(val)
            }
            return val
        }
    },
    pipe2: function () {
        var funcs = Array.from(arguments)
        return function (val) {
            return funcs.reduce((a, func) => func(a), val)
        }
    }


}




