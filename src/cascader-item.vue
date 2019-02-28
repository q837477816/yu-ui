<template>
    <div class="cascader-item">
        {{sourceItem.name}}
        <yu-cascader-item 
            v-if="sourceItem.children"
            v-for="item in sourceItem.children"
            :sourceItem="item"
        ></yu-cascader-item>
    </div>
</template>

<script>
export default {
    name: 'YuCascaderItem',
    
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.cascader-item {
    border: 1px solid red;
    margin: 10px;
}
</style>


