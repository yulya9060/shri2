module.exports = {
    entry: {
        'main': './views/main/main.js',
        'meeting': './views/meeting/meeting.js'
    },
    output: {
        path: {
            'main': path.resolve()
        }
    }
};