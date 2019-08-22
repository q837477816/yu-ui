<template>
    <div class="yu-layout" :class="layoutClass">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuLayout',
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.layoutClass.hasSider = this.$children.some(vm => vm.$options.name === 'YuSider')
    }
}
</script>


<style lang="scss" scoped>
.yu-layout {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    &.hasSider {
        flex-direction: row;
    }
}
</style>

