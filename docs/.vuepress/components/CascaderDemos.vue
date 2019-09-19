<template>
    <div class="yu-cascader-demos">
        <div>
            <p>基础用法</p>
            <yu-cascader 
                v-model="selected1"
                :source="source" />
            
            <p>{{ selected1.map(item => item.name) }}</p>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>支持传入 popoverHeight 属性，自定义选择器高度</p>

            <yu-cascader 
                v-model="selected2"
                :source="source"
                popover-height="100px" />

            <pre><code>{{usage2}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuCascader from 'src/cascader/cascader'
export default {
    name: 'CascaderDemos',
    components: { YuCascader },
    data() {
        return {
            selected1: [],
            selected2: [],
            source: [
                {
                    name: '福建省',
                    children: [
                        {
                            name: '福州市',
                            children: [
                                {name: '鼓楼区'},
                                {name: '台江区'},
                                {name: '仓山区'},
                                {name: '马尾区'}
                            ]
                        },
                        {
                            name: '厦门市',
                            children: [
                                {name: '思明区'},
                                {name: '湖里区'},
                                {name: '集美区'},
                                {name: '海沧区'},
                                {name: '翔安区'}
                            ]
                        },
                        {
                            name: '莆田市',
                            children: [
                                {name: '城厢区'},
                                {name: '涵江区'},
                                {name: '荔城区'},
                                {name: '秀屿区'},
                                {name: '仙游县'}
                            ]
                        },
                    ]
                },
                {
                    name: '江西省',
                    children: [
                        {
                            name: '南昌市',
                            children: [
                                {name: '东湖区'},
                                {name: '西湖区'},
                                {name: '青云谱区'},
                                {name: '青山湖区'}
                            ]
                        },
                        {
                            name: '九江市',
                            children: [
                                {name: '浔阳区'},
                                {name: '濂溪区'},
                                {name: '柴桑区'},
                                {name: '武宁县'},
                                {name: '修水县'}
                            ]
                        }
                    ]
                }
            ],
            usage1: `
                <yu-cascader 
                    v-model="selected1"
                    :source="source" />

                data() {
                    return {
                        selected1: [],
                        source: [
                            {
                                name: '福建省',
                                children: [
                                    {
                                        name: '福州市',
                                        children: [
                                            {name: '鼓楼区'},
                                            {name: '台江区'},
                                            {name: '仓山区'},
                                            {name: '马尾区'}
                                        ]
                                    },
                                    {
                                        name: '厦门市',
                                        children: [
                                            {name: '思明区'},
                                            {name: '湖里区'},
                                            {name: '集美区'},
                                            {name: '海沧区'},
                                            {name: '翔安区'}
                                        ]
                                    },
                                    {
                                        name: '莆田市',
                                        children: [
                                            {name: '城厢区'},
                                            {name: '涵江区'},
                                            {name: '荔城区'},
                                            {name: '秀屿区'},
                                            {name: '仙游县'}
                                        ]
                                    },
                                ]
                            },
                            {
                                name: '江西省',
                                children: [
                                    {
                                        name: '南昌市',
                                        children: [
                                            {name: '东湖区'},
                                            {name: '西湖区'},
                                            {name: '青云谱区'},
                                            {name: '青山湖区'}
                                        ]
                                    },
                                    {
                                        name: '九江市',
                                        children: [
                                            {name: '浔阳区'},
                                            {name: '濂溪区'},
                                            {name: '柴桑区'},
                                            {name: '武宁县'},
                                            {name: '修水县'}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-cascader 
                    v-model="selected2"
                    :source="source"
                    popover-height="100px" />

                data() {
                    return {
                        selected2: [],
                        source: [
                            {
                                name: '福建省',
                                children: [
                                    {
                                        name: '福州市',
                                        children: [
                                            {name: '鼓楼区'},
                                            {name: '台江区'},
                                            {name: '仓山区'},
                                            {name: '马尾区'}
                                        ]
                                    },
                                    {
                                        name: '厦门市',
                                        children: [
                                            {name: '思明区'},
                                            {name: '湖里区'},
                                            {name: '集美区'},
                                            {name: '海沧区'},
                                            {name: '翔安区'}
                                        ]
                                    },
                                    {
                                        name: '莆田市',
                                        children: [
                                            {name: '城厢区'},
                                            {name: '涵江区'},
                                            {name: '荔城区'},
                                            {name: '秀屿区'},
                                            {name: '仙游县'}
                                        ]
                                    },
                                ]
                            },
                            {
                                name: '江西省',
                                children: [
                                    {
                                        name: '南昌市',
                                        children: [
                                            {name: '东湖区'},
                                            {name: '西湖区'},
                                            {name: '青云谱区'},
                                            {name: '青山湖区'}
                                        ]
                                    },
                                    {
                                        name: '九江市',
                                        children: [
                                            {name: '浔阳区'},
                                            {name: '濂溪区'},
                                            {name: '柴桑区'},
                                            {name: '武宁县'},
                                            {name: '修水县'}
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-cascader-demos {

}
</style>

