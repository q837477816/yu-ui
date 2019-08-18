const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.vue', '.js', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            'src': path.resolve(__dirname, '../src/'),
            '_var.scss': path.resolve(__dirname, '../src/styles/_var.scss')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime'
                        ]

                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}