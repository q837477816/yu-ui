<template>
    <div class="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp;'}}
        </div>
        <div class="popover-wrapper" v-if="popoverVisible">
            <cascader-items 
                class="popover"
                :items="source"  
                :height="popoverHeight" 
                :selected="selected"
                :loadData="loadData"
                :loading-item="loadingItem"
                @update:selected="onUpdateSelected"
            ></cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from './cascader-items'
import ClickOutside from './click-outside.js'
export default {
    name: 'YuCascader',
    components: {
        CascaderItems
    },
    directives: {
        ClickOutside
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
        },
        loadData: {
            type: Function
        }
    },
    data() {
        return {
            popoverVisible: false,
            loadingItem: {}
        }
    },
    computed: {
        result() {
            return this.selected.map(item => item.name).join('/')
        }
    },
    methods: {
        open() {
            this.popoverVisible = true
        },
        close() {
            this.popoverVisible = false
        },
        toggle() {
            if (this.popoverVisible) {
                this.close()
            } else {
                this.open()
            }
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            if (this.loadData) {
                let lastItem = newSelected[newSelected.length - 1]
                let updateSource = (result) => {
                    this.loadingItem = {} // TODO: 用户连续点击多个时，异步存在BUG
                    result.length && this.$set(lastItem, 'children', result)
                }
                if (!lastItem.isLeaf) {
                    this.loadingItem = lastItem
                    this.loadData(lastItem, updateSource)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'var';
.cascader {
    display: inline-block;
    position: relative;
    .trigger {
        background-color: #fff;
        height: $input-height;
        line-height: $input-height;
        display: inline-flex;
        align-items: center;
        padding: 0 1em;
        min-width: 10em;
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
    .popover-wrapper {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 4px;
        background-color: #fff;
        display: flex;
        z-index: 1;
        @extend .box-shadow;
    }
}
</style>


