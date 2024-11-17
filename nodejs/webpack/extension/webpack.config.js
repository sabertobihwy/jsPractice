const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    output:{
        filename: "scripts/[name].[contenthash:5].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // publicPath + path 
    },
    module: {
        rules:[
            {
                test: /\.(png|jpg)$/,
                use: [{
                        loader: "url-loader",
                        options:{
                            limit: 1* 1024, // <= base64
                            name: "imgs/[name].[hash:5].[ext]" // >: file-loader 
                    }
                }]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*'] // output.path Must be defined 
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "html/html/index.html"
        })
    ],
    stats:{
        colors: true,
        modules: false
    },
    devServer:{
        open: ['html/html/index.html'],
        proxy: {
            '/api':{ 
                target: "http://yuanjin.tech:5100",
                changeOrigin: true,  // 更改请求头的host
            },
        },
    }
    
}