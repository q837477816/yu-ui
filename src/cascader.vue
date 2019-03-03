<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{result || '&nbsp;'}}
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
    computed: {
        result() {
            return this.selected.map(item => item.name).join('/')
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
        @extend .box-shadow;
    }
}
</style>


