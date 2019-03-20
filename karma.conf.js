const webpackConfig = require('./webpack.test.js')
module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai'],

        client: {
            chai: {
                includeStack: true
            }
        },

        files: ['test/**/*.test.js'],

        preprocessors: {
            '**/*.test.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec'],

        browsers: ['ChromeHeadless']
    })
}