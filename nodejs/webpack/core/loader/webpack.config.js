module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
       // filename: '[name].[chunkhash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: './loader/image_loader.js',
                        options:{
                            limit: 2000,
                            fileName: '[name].[contenthash:5].[ext]'
                        }
                    }
                ]
            },
            {
                test: /a\.js$/,
                use: [
                    {
                        loader: './loader/test_loader.js', // 配置一个专门把未知数转换的loader
                        options:{
                            changeVar : '未知数'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: './loader/css_loader.js' 
                    }
                ]
            }
        ]
    }

}