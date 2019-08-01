const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name].test.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'Output Management',
            minify: {
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            },
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),

        new VueLoaderPlugin()
    ],

    optimization: {
        minimize: true,
        minimizer: [
            (compiler) => {
                // console.log(compiler);
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                    cache: true,
                    test: /\.js(\?.*)?$/i,
                    sourceMap: true,
                }).apply(compiler);
            },

        ],
    },

    devtool: 'source-map',
    
    devServer:{
        contentBase: path.join(__dirname, "../dist"),
        hot: true,
        port: 8088,
        compress: true,
        open: true,
    },

}