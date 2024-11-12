var myPlugin = require("./plugins/MyPlugin")
module.exports = {
    mode : "development",
    devtool : "source-map",
    plugins: [
        new myPlugin()
    ],
    watch: false
}