const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.join(__dirname, './src/assets/css/index.less'),
            ]
        }
    },
    publicPath: './',
}