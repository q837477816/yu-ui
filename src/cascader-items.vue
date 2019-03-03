<template>
    <div class="cascader-items" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="leftSelected = item">
                {{item.name}}
                <icon class="icon" v-if="item.children" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <yu-cascader-items :items="rightItems" :height="height"></yu-cascader-items>
        </div>
    </div>
</template>

<script>
import Icon from './icon'
export default {
    name: 'YuCascaderItems',
    components: { Icon },
    props: {
        items: {
            type: Array
        },
        height: {
            type: String
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
@import 'var';
.cascader-items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100px;
    .left {
        height: 100%;
        padding: 0.3em 0;
        .label {
            padding: 0.3em 1em;
            display: flex;
            align-items: center;
            .icon {
                margin-left: 1em;
                transform: scale(0.6);
            }
        }
    }
    .right {
        height: 100%;
        border-left: 1px solid $border-color-light;
    }
}
</style>


