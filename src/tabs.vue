<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
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
    created() {
        // this.$emit('update:selected', 'xxx')
    }
}
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
