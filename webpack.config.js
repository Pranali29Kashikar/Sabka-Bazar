const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'resources/js'),
        filename: 'bundle.js'
    },
    mode: 'development' 
};