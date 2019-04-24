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
@import "../styles/_var.scss";
.yu-sub-nav {
    position: relative;
    > span {
        padding: 0.5em 1em;
        display: block;
    }
    &-popover {
        background-color: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 4px;
        white-space: nowrap;
        box-shadow: 0 0 3px fade_out(black, 0.8);
        border-radius: $border-radius;
        color: $light-color;
        font-size: $font-size;
        min-width: 8em;
    }
}
.yu-sub-nav .yu-sub-nav .yu-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
}
</style>