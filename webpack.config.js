const path = require('path')

module.exports = {
    entry: './App/app.js',
    output: {
        filename: 'bundle.js',
        path: '/dist',
        publicPath: "/"
    }
}