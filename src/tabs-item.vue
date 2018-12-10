<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YuTabsItem',
    props: {
        disabled: {
            typd: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs-item {

    }
</style>