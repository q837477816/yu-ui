<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'YuTabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].includes(value)
            }
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
        this.$children.forEach(vm => {
            if (vm.$options.name === 'YuTabsHead') {
                vm.$children.forEach(item => {
                    if (item.$options.name === 'YuTabsItem' && item.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, item)
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
