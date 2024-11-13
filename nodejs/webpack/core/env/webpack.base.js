const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].[contenthash:5].js'
    },
    context: path.resolve(__dirname,'src'),
    target: 'web'

}