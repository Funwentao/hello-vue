const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry :{
        app:"./src/main.js"
    },
    output:{
        filename: "./js/[name].js"
    },
    module:{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','stage-2'],
                    // plugins: [['import', {"libraryName": "antd", "style": "css"}]]
                }
            }
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '二维码',
            filename: './view/home.html',
            template: './index.html',
            chunks:['app']
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin("./css/[name].css"),
    ]
}