module.exports = class MyPlugin{
    apply(compiler){
        console.log("compiler对象初始化。")
        compiler.hooks.done.tap('donePlugin',function(compilation){
            console.log("compile done 触发")
            
        })
        compiler.hooks.emit.tap('addFileMd', compilation => {
            let content = []
             // 遍历 `compilation.assets` 中的所有资源文件
            for (const assetName in compilation.assets) {
                const asset = compilation.getAsset(assetName);
        
                // `asset.source` 提供了 `size()` 方法来获取文件大小
                const size = asset.source.size();
                content.push(`Asset: ${assetName}, Size: ${size} bytes`);
            }
            // 使用 emitAsset 方法添加文件
            compilation.emitAsset(
            "123.txt",
            new compiler.webpack.sources.RawSource(content.join('\n\n'))
            );
        })
    }
}