<template>
    <div class="cascader-items" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <icon class="icon" v-if="!item.isLeaf" name="right"></icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <yu-cascader-items 
                :items="rightItems" 
                :height="height" 
                :level="level + 1"
                :selected="selected"
                @update:selected="onUpdateSelected"
            ></yu-cascader-items>
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
        },
        selected: {
            type: Array,
            default: () => {
                return []
            }
        },
        level: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        rightItems() {
            let currentSelected = this.selected[this.level]
            if (currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = item
            copy.splice(this.level + 1)
            this.$emit('update:selected', copy)
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
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
        overflow: auto;
        .label {
            padding: 0.5em 1em;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
                background-color: $grey;
            }
            .name {
                margin-right: 1em;
                user-select: none;
            }
            .icon {
                margin-left: auto;
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


