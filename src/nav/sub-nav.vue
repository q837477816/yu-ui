<template>
    <div class="yu-sub-nav">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="yu-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuSubNav'
}
</script>

<style lang="scss" scoped>
.yu-sub-nav {
    position: relative;
    padding: 0.5em 1em;
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid black;
        white-space: nowrap;
    }
}
</style>