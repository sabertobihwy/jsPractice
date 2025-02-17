/**
 *  "12,654,2342-78678 876,222" 
 *  每个number调用async方法getName(),最后组合成str
 */

async function getName(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('name' + num)
        }, 0)
    })

};

String.prototype.asyncReplaceAll = async function (pattern, asyncFn) {
    if (typeof pattern === 'string') {
        pattern = new RegExp(pattern, 'g')
    } else if (pattern instanceof RegExp) {
        if (!pattern.global) {
            throw new TypeError('should be global')
        }
        pattern = new RegExp(pattern)
    } else {
        throw new TypeError('should be a RegExp')
    }

    // pattern is a global regex
    if (typeof asyncFn === 'string') {
        return this.replaceAll(pattern, asyncFn)
    } else if (typeof asyncFn !== 'function') {
        throw new TypeError('should be a function')
    }

    // fn is a function 
    const matches = this.match(pattern)
    console.log(matches)
    const result = await Promise.all(matches.map(asyncFn))
    console.log(result)
    let count = 0;
    return this.replaceAll(pattern, () => {
        return result[count++]
    })
};




(async function () {
    const result = await "12,654,2342-78678 876,222"
        .asyncReplaceAll(/\d+(?!\d)/g, getName)
    console.log(result)
})();