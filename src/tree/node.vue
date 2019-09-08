<template>
    <ul class="tree-ul">
        <li class="tree-li">
            <span class="tree-expand" @click="handleExpand">
                <span v-if="data.children && data.children.length && !data.expand">+</span>
                <span v-if="data.children && data.children.length && data.expand">-</span>
            </span>
            <yu-checkbox
                v-if="checkboxVisible"
                :value="data.checked"
                @input="handleCheck" />
            <span>{{ data.title }}</span>
            <template v-if="data.expand">
                <yu-tree-node 
                    v-for="(item, index) in data.children"
                    :key="index"
                    :data="item"
                    :checkbox-visible="checkboxVisible" />
            </template>
        </li>
    </ul>
</template>

<script>
import YuCheckbox from 'src/checkbox/checkbox'
import {findComponentUpward} from 'src/utils'
export default {
    name: 'YuTreeNode',
    components: { YuCheckbox },
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        },
        checkboxVisible: {
            type: Boolean, 
            default: false
        }
    },
    data() {
        return {
            tree: findComponentUpward(this, 'YuTree')
        }
    },
    watch: {
        'data.children': {
            deep: true,
            handler(data) {
                const checkedAll = data.every(item => item.checked)
                this.$set(this.data, 'checked', checkedAll)
            }
        }
    },
    methods: {
        handleExpand() {
            this.$set(this.data, 'expand', !this.data.expand)
            this.tree && this.tree.emitEvent('on-toggle-expand', this.data)
        },
        handleCheck(checked) {
            this.updateTreeDown(this.data, checked)
            this.tree && this.tree.emitEvent('on-check-change', this.data)
        },
        updateTreeDown(data, checked) {
            this.$set(data, 'checked', checked)
            if (data.children && data.children.length) {
                data.children.forEach(item => {
                    this.updateTreeDown(item, checked)
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tree-ul, .tree-li {
    list-style: none;
    padding-left: 10px;
}
.tree-expand {
    display: inline-block;
    width: 8px;
    cursor: pointer;
}
</style>