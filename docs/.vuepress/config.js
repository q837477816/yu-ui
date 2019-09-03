const path = require('path')
module.exports = {
    base: '/yu-ui/',
    title: 'yu-ui',
    description: '一个基于Vue的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/grid',
                    '/components/layout',
                    '/components/input',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            },
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                'src': path.resolve(__dirname, '../../src/'),
                '_var.scss': path.resolve(__dirname, '../../src/styles/_var.scss')
            }
        }
    }
}