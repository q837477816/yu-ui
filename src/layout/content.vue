<template>
    <div class="yu-content">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuContent'
}
</script>

<style lang="scss" scoped>
.yu-content {
    flex-grow: 1;
}
</style>