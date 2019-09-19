<template>
    <div v-click-outside="close" class="yu-cascader">
        <div class="yu-cascader-trigger" @click="toggle">
            {{ result || '&nbsp;' }}
        </div>
        <div v-if="popoverVisible" class="yu-cascader-popover-wrapper">
            <cascader-items 
                class="yu-cascader-popover"
                :items="source"  
                :height="popoverHeight" 
                :selected="selected"
                :loading-item="loadingItem" />
        </div>
    </div>
</template>

<script>
import CascaderItems from './cascader-items'
import ClickOutside from 'src/click-outside.js'
export default {
    name: 'YuCascader',
    components: { CascaderItems },
    directives: { ClickOutside },
    model: {
        prop: 'selected',
        event: 'update:selected'
    },
    props: {
        selected: {
            type: Array,
            required: true
        },
        source: {
            type: Array,
            required: true
        },
        popoverHeight: {
            type: String,
            required: false,
            default: ''
        },
        loadData: {
            type: Function,
            required: false,
            default: undefined
        }
    },
    provide() {
        return {
            cascader: this
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
            this.popoverVisible ? this.close() : this.open()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-cascader {
    display: inline-block;
    font-size: 14px;
    position: relative;
    &-trigger {
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
    &-popover-wrapper {
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


