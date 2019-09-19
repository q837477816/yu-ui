<template>
    <div class="yu-cascader-items" :style="{height}">
        <div class="yu-cascader-left">
            <div 
                v-for="(item, index) in items" 
                :key="index" 
                class="label" 
                @click="onClickLabel(item)">
                <span class="name">{{ item.name }}</span>
                <span class="icons">
                    <template v-if="item.name === loadingItem.name">
                        <yu-icon class="icon loading" name="loading" />
                    </template>
                    <template v-else>
                        <yu-icon v-if="rightArrowVisible(item)" class="next" name="right" />
                    </template>
                </span>
            </div>
        </div>
        <div v-if="rightItems" class="yu-cascader-right">
            <yu-cascader-items 
                :items="rightItems" 
                :height="height" 
                :level="level + 1"
                :selected="selected"
                :load-data="loadData"
                :loading-item="loadingItem" />
        </div>
    </div>
</template>

<script>
import YuIcon from 'src/icon/icon'
import { deepCopy } from 'src/utils'
export default {
    name: 'YuCascaderItems',
    components: { YuIcon },
    props: {
        items: {
            type: Array,
            required: true
        },
        height: {
            type: String,
            default: 'auto'
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        },
        loadData: {
            type: Function,
            default: undefined
        },
        loadingItem: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    inject: ['cascader'],
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
            let copy = deepCopy(this.selected)
            copy[this.level] = item
            copy.splice(this.level + 1)
            this.cascader.$emit('update:selected', copy)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-cascader-items {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 160px;
    .yu-cascader-left {
        box-sizing: border-box;
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
                    @include loading;
                }
            }
        }
    }
    .yu-cascader-right {
        height: 100%;
        border-left: 1px solid $border-color-light;
    }
}
</style>


