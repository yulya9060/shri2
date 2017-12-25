const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./devserver');
const sass = require('./sass');

const PATHS = {
    source: path.join(__dirname,'source'),
    build: path.join(__dirname,'build')
};

const common = merge([
    {
    entry: {
        'main': PATHS.source + '/pages/main/main.js',
        'meeting': PATHS.source + '/pages/meeting/meeting.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            chunks: ['main'],
            template: PATHS.source + '/pages/main/main.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'meeting.html',
            chunks: ['meeting'],
            template: PATHS.source + '/pages/meeting/meeting.html'
        }),
    ],
    }
   ]);
   
module.exports = function(env) {
    if (env === 'production') {
    return common;
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass()
            ]);
    }
   };