<template>
    <div class="demo-wrapper">
        <yu-checkbox v-model="single">单选</yu-checkbox>

        {{ single }}

        <yu-checkbox-group v-model="multiple">
            <yu-checkbox label="1">1</yu-checkbox>
            <yu-checkbox label="2">2</yu-checkbox>
            <yu-checkbox label="3">3</yu-checkbox>
        </yu-checkbox-group>

        {{ multiple }}
    </div>
</template>

<script>
import YuCheckbox from 'src/checkbox/checkbox'
import YuCheckboxGroup from 'src/checkbox/checkbox-group'
export default {
    components: { YuCheckbox, YuCheckboxGroup },
    data() {
        return {
            single: '',
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


