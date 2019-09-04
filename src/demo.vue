<template>
    <div class="demo-wrapper">
        <yu-checkbox v-model="single">单选</yu-checkbox>
    </div>
</template>

<script>
import YuCheckbox from 'src/checkbox/checkbox'
export default {
    components: { YuCheckbox },
    data() {
        return {
            single: ''
        }
    }
}
</script>

<style lang="scss" scoped>

:root {
  	--font-size: 14px;
}
body {
  	font-size: var(--font-size);
}
.demo-wrapper {
  	padding: 20px;
}
</style>


