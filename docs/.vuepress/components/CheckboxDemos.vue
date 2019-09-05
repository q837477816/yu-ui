<template>
    <div>
        <div>
            <p>基础用法</p>

            <yu-checkbox v-model="single">单选</yu-checkbox>
            <p>数据：{{ single }}</p>
            
            <pre><code>{{usage1}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>禁用状态</p>

            <yu-checkbox v-model="checked1" disabled>单选</yu-checkbox>
            <yu-checkbox v-model="checked2" disabled>单选</yu-checkbox>
            
            <pre><code>{{usage2}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>自定义选中的值和没有选中的值</p>

            <yu-checkbox v-model="custom" true-value="like" false-value="dislike">编程</yu-checkbox>
            <p>数据：{{ custom }}</p>

            <pre><code>{{usage3}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>多选框组</p>

            <yu-checkbox-group v-model="multiple">
                <yu-checkbox label="option1">选项1</yu-checkbox>
                <yu-checkbox label="option2">选项2</yu-checkbox>
                <yu-checkbox label="option3">选项3</yu-checkbox>
                <yu-checkbox label="option4" disabled>禁用1</yu-checkbox>
                <yu-checkbox label="option5" disabled>禁用2</yu-checkbox>
            </yu-checkbox-group>

            <p>数据：{{ multiple }}</p>

            <pre><code>{{usage4}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuCheckbox from 'src/checkbox/checkbox'
import YuCheckboxGroup from 'src/checkbox/checkbox-group'

export default {
    name: 'TabsDemos',
    components: { YuCheckbox, YuCheckboxGroup },
    data() {
        return {
            single: true,
            checked1: true,
            checked2: false,
            custom: 'like',
            multiple: [],
            usage1: `
                <yu-checkbox v-model="single">单选</yu-checkbox>

                data() {
                    return {
                        single: true
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-checkbox v-model="checked1" disabled>单选</yu-checkbox>
                <yu-checkbox v-model="checked2" disabled>单选</yu-checkbox>

                data() {
                    return {
                        checked1: true,
                        checked2: false
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-checkbox v-model="custom" true-value="like" false-value="dislike">编程</yu-checkbox>

                data() {
                    return {
                        custom: 'like'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage4: `
                <yu-checkbox-group v-model="multiple">
                    <yu-checkbox label="option1">选项1</yu-checkbox>
                    <yu-checkbox label="option2">选项2</yu-checkbox>
                    <yu-checkbox label="option3">选项3</yu-checkbox>
                    <yu-checkbox label="option4" disabled>禁用1</yu-checkbox>
                    <yu-checkbox label="option5" disabled>禁用2</yu-checkbox>
                </yu-checkbox-group>

                data() {
                    return {
                        multiple: []
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
}
</script>

