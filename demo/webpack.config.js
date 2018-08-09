const path = require ("path");
const HTMLWebpackPlugin = require ("html-webpack-plugin");
const webpack = require ("webpack");


module.exports = {
    entry: {
        main: "./src/main.js",
        cont: "./cont/cont.js"
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].[hash].js",
        libraryTarget: "amd"    // amd、umd、commonjs
    },
    mode: "development",
    devServer: {
        port: 9000,
        contentBase: path.resolve(),
        hot: false,
        open: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
              test: /\.js$/,
              use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: "url-loader"
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: "url-loader"
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: "url-loader"
            }
        ]
    }
}