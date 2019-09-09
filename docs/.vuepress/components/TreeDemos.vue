<template>
    <div>
        <div>
            <p>基础用法</p>
        
            <yu-tree :data="data1" />

            <pre><code>{{usage1}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>默认展开，可通过给节点设置 expend 属性实现节点的默认展开</p>

            <yu-tree :data="data2"></yu-tree>

            <pre><code>{{usage2}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>可选择，可通过设置 checkboxVisible 属性显示每一层级的 单选框</p>

            <yu-tree :data="data3" checkbox-visible></yu-tree>

            <pre><code>{{usage3}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuTree from 'src/tree/tree'
export default {
    name: 'YuTreeDemos',
    components: { YuTree },
    data() {
        return {
            data1: [
                {
                    title: "parent 1",
                    children: [
                        {
                            title: "parent 1-1",
                            children: [
                                { title: "leaf 1-1-1" },
                                { title: "leaf 1-1-2" }
                            ]
                        },
                        {
                            title: "parent 1-2",
                            children: [
                                { title: "leaf 1-2-1" },
                                { title: "leaf 1-2-1" }
                            ]
                        }
                    ]
                }
            ],
            data2: [
                {
                    title: "parent 1",
                    expand: true,
                    children: [
                        {
                            title: "parent 1-1",
                            expand: true,
                            children: [
                                { title: "leaf 1-1-1" },
                                { title: "leaf 1-1-2" }
                            ]
                        },
                        {
                            title: "parent 1-2",
                            expand: true,
                            children: [
                                { title: "leaf 1-2-1" },
                                { title: "leaf 1-2-1" }
                            ]
                        }
                    ]
                }
            ],
            data3: [
                {
                    title: "parent 1",
                    children: [
                        {
                            title: "parent 1-1",
                            children: [
                                { title: "leaf 1-1-1" },
                                { title: "leaf 1-1-2" }
                            ]
                        },
                        {
                            title: "parent 1-2",
                            children: [
                                { title: "leaf 1-2-1" },
                                { title: "leaf 1-2-1" }
                            ]
                        }
                    ]
                }
            ],
            usage1: `
                <yu-tree :data="data1" />

                data() {
                    return {
                        data1: [
                            {
                                title: "parent 1",
                                children: [
                                    {
                                        title: "parent 1-1",
                                        children: [
                                            { title: "leaf 1-1-1" },
                                            { title: "leaf 1-1-2" }
                                        ]
                                    },
                                    {
                                        title: "parent 1-2",
                                        children: [
                                            { title: "leaf 1-2-1" },
                                            { title: "leaf 1-2-1" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-tree :data="data2"></yu-tree>

                data() {
                    return {
                        data2: [
                            {
                                title: "parent 1",
                                expand: true,
                                children: [
                                    {
                                        title: "parent 1-1",
                                        expand: true,
                                        children: [
                                            { title: "leaf 1-1-1" },
                                            { title: "leaf 1-1-2" }
                                        ]
                                    },
                                    {
                                        title: "parent 1-2",
                                        expand: true,
                                        children: [
                                            { title: "leaf 1-2-1" },
                                            { title: "leaf 1-2-1" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
                
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-tree :data="data3" checkbox-visible></yu-tree>
                
                data() {
                    return {
                        data3: [
                            {
                                title: "parent 1",
                                children: [
                                    {
                                        title: "parent 1-1",
                                        children: [
                                            { title: "leaf 1-1-1" },
                                            { title: "leaf 1-1-2" }
                                        ]
                                    },
                                    {
                                        title: "parent 1-2",
                                        children: [
                                            { title: "leaf 1-2-1" },
                                            { title: "leaf 1-2-1" }
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

