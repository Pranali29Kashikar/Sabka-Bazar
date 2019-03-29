const path = require('path');
const HtmlwebpackPlugin =require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname,'resources'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './resources'
    },
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: './src/home.html'
        })
    ],
    

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
