<template>
    <div class="cascader-items" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <span class="icons">
                    <template v-if="item.name === loadingItem.name">
                        <icon class="icon loading" name="loading"></icon>
                    </template>
                    <template v-else>
                        <icon class="next" v-if="rightArrowVisible(item)" name="right"></icon>
                    </template>
                </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <yu-cascader-items 
                :items="rightItems" 
                :height="height" 
                :level="level + 1"
                :selected="selected"
                :loadData="loadData"
                :loading-item="loadingItem"
                @update:selected="onUpdateSelected"
            ></yu-cascader-items>
        </div>
    </div>
</template>

<script>
import Icon from '../icon'
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
        },
        loadData: {
            type: Function
        },
        loadingItem: {
            type: Object,
            default: () => {
                return {}
            }
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
        rightArrowVisible(item) {
            return this.loadData ? !item.isLeaf : item.children
        },
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
@import '../styles/var';
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
            white-space: nowrap;
            cursor: pointer;
            &:hover {
                background-color: $grey;
            }
            .name {
                margin-right: 1em;
                user-select: none;
            }
            .icons {
                margin-left: auto;
                .next {
                    transform: scale(0.6);
                }
                .loading {
                    animation: spin 2s infinite linear;
                }
            }
        }
    }
    .right {
        height: 100%;
        border-left: 1px solid $border-color-light;
    }
}
</style>

