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
        // this.$emit('update:selected', '这是this $emit 出来的数据')
        this.eventBus.$emit('update:selected', this.selected)
        // this.$emit('update:selected', 'xxx')
    }
}
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
