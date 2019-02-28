<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in dataSource">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
    name: 'YuCascader',
    components: {
        CascaderItem
    },
    props: {
        dataSource: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
.cascader {
    
}
</style>


