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
                    '/components/layout',
                    '/components/input',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                ]
            },
        ]
    }
}