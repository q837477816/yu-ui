<template>
    <div class="yu-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="yu-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuSubNav',
    data() {
        return {
            open: false
        }
    },
    methods: {
        onClick() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-sub-nav {
    position: relative;
    > span {
        padding: 0.5em 1em;
        display: block;
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid black;
        white-space: nowrap;
    }
}
.yu-sub-nav .yu-sub-nav .yu-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
}
</style>