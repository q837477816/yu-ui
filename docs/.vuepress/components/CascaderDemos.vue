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
        <div style="margin-top: 40px;">
            <p>支持传入 loadData 方法进行异步加载子节点，注意只有 isLeaf 为 false 的非叶子节点在展开的时候会调用 loadData 方法；loadData 方法有两个参数，第一个为当前点击的 node ，另一个则是在loadData 方法最后必须调用的回调函数</p>

            <yu-cascader 
                v-model="selected3"
                :source="source1"
                :load-data="loadData"
                popover-height="100px" />

            <pre><code>{{usage3}}</code></pre>
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
            selected3: [],
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
            source1: [
                {
                    name: '选项0',
                    isLeaf: false
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
            usage3: `
                <yu-cascader 
                    v-model="selected3"
                    :source="source1"
                    :load-data="loadData"
                    popover-height="100px" />

                data() {
                    return {
                        selected3: [],
                        source1: [
                            {
                                name: '选项0',
                                isLeaf: false
                            }
                        ]
                    }
                }

                methods: {
                    loadData(node, updateSource) {
                        const {name, level} = node;
                        setTimeout(() => {
                            const nodes = [];
                            for (let i = 0; i < 2; i++) {
                                nodes.push({
                                    name: \`\${name}-\${i}\`,
                                    isLeaf: level > 1
                                })
                            }
                            updateSource(nodes);
                        }, 1000);
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        
        }
    },
    methods: {
        loadData(node, updateSource) {
            const {name, level} = node;
            setTimeout(() => {
                const nodes = [];
                for (let i = 0; i < 2; i++) {
                    nodes.push({
                        name: `${name}-${i}`,
                        isLeaf: level > 1
                    })
                }
                updateSource(nodes);
            }, 1500);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-cascader-demos {

}
</style>

