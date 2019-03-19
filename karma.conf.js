const webpackConfig = require('./webpack.karma.config.js')
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