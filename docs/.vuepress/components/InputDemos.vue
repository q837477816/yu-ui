<template>
    <div>
        <div>
            <p>基础用法</p>
            <yu-input v-model="text1" placeholder="请输入内容"></yu-input>
            text1: {{ `"${text1}"` }}

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>禁用状态</p>
            <yu-input placeholder="请输入内容" disabled></yu-input>

            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>只读</p>
            <yu-input v-model="text2" readonly></yu-input>

            <pre><code>{{usage3}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>展示错误信息</p>
            <yu-input v-model="text3" error=“糟糕，出错了”></yu-input>

            <pre><code>{{usage4}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuInput from 'src/input/input'
export default {
    name: 'InputDemos',
    components: { YuInput },
    data() {
        return {
            text1: '', 
            text2: '这是一个只读的input框',
            text3: '错误的输入',
            usage1: `
                <yu-input v-model="text1" placeholder="请输入内容"></yu-input>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-input placeholder="请输入内容" disabled></yu-input>
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-input v-model="text2" readonly></yu-input>
            `.replace(/^ {16}/gm, '').trim(),
            usage4: `
                <yu-input v-model="text3" error=“糟糕，出错了”></yu-input>
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

