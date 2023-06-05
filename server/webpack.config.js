const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    target:'node',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
            }
        ]
    },
    devtool:'source-map',
    plugins:[
        new NodemonPlugin()
    ]
}