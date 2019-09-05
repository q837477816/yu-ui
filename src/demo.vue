<template>
    <div class="demo-wrapper">
        <!-- <yu-checkbox v-model="single">单选</yu-checkbox>

        数据：{{ single }} -->

        <yu-checkbox-group v-model="multiple">
            <yu-checkbox label="option1">选项1</yu-checkbox>
            <yu-checkbox label="option2">选项2</yu-checkbox>
            <yu-checkbox label="option3">选项3</yu-checkbox>
        </yu-checkbox-group>

        数据：{{ multiple }}
    </div>
</template>

<script>
import YuCheckbox from 'src/checkbox/checkbox'
import YuCheckboxGroup from 'src/checkbox/checkbox-group'
export default {
    components: { YuCheckbox, YuCheckboxGroup },
    data() {
        return {
            single: true,
            multiple: []
        }
    }
}
</script>

<style lang="scss" scoped>

// :root {
//   	--font-size: 14px;
// }
// body {
//   	font-size: var(--font-size);
// }
// .demo-wrapper {
//   	padding: 20px;
// }
</style>


