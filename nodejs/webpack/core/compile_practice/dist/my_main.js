(function (map){
    const cache = {}

    function _webpack_require(path){
        if(cache[path]){
            return cache[path]
        }
        let module = {
            exports:{}
        }
        const func = map[path]
        func(module, module.exports, _webpack_require)
        cache[path] = module.exports
        return module.exports
    }

    // 执行入口文件
    return _webpack_require("./src/index.js")

})({
    "./src/a.js": function(module,exports){
        console.log("This is A")
        module.exports = "a"
    },
    "./src/c.js":function(module,exports){
        console.log("This is C")
        exports.c = "c"
    },
    "./src/index.js": function(module,exports,_webpack_require){
        eval(`
            var a = _webpack_require('./src/a.js');
            var c = _webpack_require('./src/c.js');
            a.abc.a = 1;
            console.log("This is B, a =" + a + ", c =" + c.c);
        //# sourceURL=./src/index.js`);
        
    }
})