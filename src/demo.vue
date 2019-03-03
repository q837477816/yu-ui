<template>
    <div class="demo-wrapper">
        1111111111
        <yu-cascader :source="source" popoverHeight="200px"></yu-cascader>
        222222222
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            source: [
                {
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '上城'},
                                {name: '下城'},
                                {name: '江干'},
                            ]
                        },
                        {
                            name: '嘉兴',
                            children: [
                                {name: '南湖'},
                                {name: '秀洲'},
                                {name: '嘉善'},
                            ]

                        },
                        {
                            name: '湖州'
                        },
                    ]
                },
                {
                    name: '福建',
                    children: [
                        {
                            name: '福州',
                            children: [
                                {name: '鼓楼'},
                                {name: '台江'},
                                {name: '仓山'},
                            ]
                        },
                        {name: '厦门'},
                        {name: '莆田'},
                        {name: '泉州'},
                        {name: '三明'},
                    ]
                },
                {
                    name: '安徽',
                    children: [
                        {
                            name: '合肥',
                            children: [
                                {name: '琼海'},
                                {name: '庐阳'},
                            ]
                        },
                        {name: '芜湖'},
                    ]
                }
            ]
        }
    },

    created() {

    },

    methods: {

    }

}
</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}

:root{
    --font-size: 14px;
}
body{
    font-size: var(--font-size)
}
.demo-wrapper {
    margin: 50px;
}
</style>


