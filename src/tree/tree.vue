<template>
    <div class="yu-tree">
        <yu-tree-node 
            v-for="(item, index) in cloneData" 
            :key="index"
            :data="item" 
            :checkbox-visible="checkboxVisible" />
    </div>
</template>

<script>
import YuTreeNode from './node'
import { deepCopy } from '../utils'
export default {
    name: 'YuTree',
    components: { YuTreeNode },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        checkboxVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cloneData: []
        }
    },
    watch: {
        data() {
            this.rebuildData()
        }
    },
    created() {
        this.rebuildData()
    },
    methods: {
        rebuildData() {
            this.cloneData = deepCopy(this.data)
        },
        emitEvent(eventName, data) {
            this.$emit(eventName, data, this.cloneData)
        }
    }
}
</script>