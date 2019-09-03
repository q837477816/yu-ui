<template>
    <div class="yu-collapse">
        <slot />
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'YuCollapse',
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('update:selected', this.selected)
        this.eventBus.$on('update:addSelected', this.addSelected)
        this.eventBus.$on('update:removeSelected', this.removeSelected)
    },
    beforeDestroy() {
        this.eventBus.$off('update:addSelected')
        this.eventBus.$off('update:removeSelected')
    },
    methods: {
        addSelected(name) {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            if (this.single) {
                selectedCopy = [name]
            } else {
                selectedCopy.push(name)
            }
            this.notifyChildrenAndParent(selectedCopy)
        },
        removeSelected(name) {
            let selectedCopy = JSON.parse(JSON.stringify(this.selected))
            let index = selectedCopy.indexOf(name)
            selectedCopy.splice(index, 1)
            this.notifyChildrenAndParent(selectedCopy)
        },
        notifyChildrenAndParent(selected) {
            this.eventBus.$emit('update:selected', selected)
            this.$emit('update:selected', selected)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-collapse {
    border: 1px solid $light-grey;
    border-radius: $border-radius;
}
</style>


