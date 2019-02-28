<template>
    <div class="cascader-items">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <yu-cascader-items :items="rightItems"></yu-cascader-items>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuCascaderItems',
    props: {
        items: {
            type: Array
        }
    },
    data() {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems() {
            if (this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.cascader-items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left {
        border: 1px solid red;
    }
    .right {
        margin-top: -1px;
    }
}
</style>


