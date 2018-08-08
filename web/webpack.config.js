const path = require ("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {   // 添加模块处理器
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: "url-loader"
            }
        ]
    },
    resolve: {  
        extensions: [".js", ".vue", ".json"],   //自动查找文件后缀
        alias: {    // 配置路径别名
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve("src")
        }
    }
}