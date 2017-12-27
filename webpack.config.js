const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const webpack = require('webpack');
const images = require('./webpack/images');
const uglifyJS = require('./webpack/js.uglify');
const favicon = require('./webpack/favicon');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'main.html',
            chunks: ['main','common'],
            template: PATHS.source + '/pages/main/main.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'meeting.html',
            chunks: ['meeting','common'],
            template: PATHS.source + '/pages/meeting/meeting.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new CleanWebpackPlugin(PATHS.build),
    ],
    },
    images()
   ]);
   
module.exports = function(env) {
    if (env === 'production') {
    return merge([
        common,
        extractCSS(),
        uglifyJS({ useSourceMap: true }),
        favicon()
    ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass()
            ]);
    }
   };