module.exports = function() {
    return {
        devServer: {
            contentBase: '/build',
            compress: true,
            stats: 'errors-only'
            
           }
    };
   
};

console.log('настройки devserver');