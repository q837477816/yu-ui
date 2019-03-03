<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items 
                class="popover"
                :items="source"  
                :height="popoverHeight" 
                :selected="selected"
                @update:selected="onUpdateSelected"
            ></cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
    name: 'YuCascader',
    components: {
        CascaderItems
    },
    props: {
        source: {
            type: Array
        },
        popoverHeight: {
            type: String
        },
        selected: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            popoverVisible: false,
        }
    },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'var';
.cascader {
    position: relative;
    .trigger {
        border: 1px solid black;
        height: 32px;
        width: 100px;
    }
    .popover-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        display: flex;
        @extend .box-shadow;
    }
}
</style>


