const path = require('path');
const HtmlwebpackPlugin =require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssOutput = 'css/style.css';

module.exports = {
    entry: ["./src/js/index.js", 
            "./src/sass/breakpoint.scss",
            "./src/sass/product_listing.scss",
            "./src/sass/login.scss",
            "./src/sass/main.scss",
            "./src/sass/home.scss",
            "./src/sass/header.scss"
        ],
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
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssOutput)
    ]

};

