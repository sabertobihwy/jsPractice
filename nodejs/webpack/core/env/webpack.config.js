const base = require('./webpack.base')
const dev = require('./webpack.dev')
const prod = require('./webpack.prod')

module.exports = function (env){
    if(env && env.prod){
        return {
            ...base,
            ...prod
        }
    }else{
        return {
            ...base,
            ...dev
        }
    }
}