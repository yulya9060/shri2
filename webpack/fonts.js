module.exports = function() {
    return {
    module: {
    rules: [
    {
    test: /\.(eot|ttf|woff|woff2|otf)$/,
    loader: 'file-loader',
    options: {
    name: 'fonts/HelveticaNeue/[name].[ext]'
    }
    }
    ]
    }
    };
   };

console.log('настройки fonts');