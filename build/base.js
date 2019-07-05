const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, "../dist")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'Output Management'
        })
    ],
    devtool: 'source-map'
}