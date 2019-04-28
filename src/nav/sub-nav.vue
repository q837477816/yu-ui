<template>
    <div class="yu-sub-nav" :class="{active}" v-click-outside="close">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="yu-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ClickOutside from '../click-outside.js';
export default {
    name: 'YuSubNav',
    directives: {
        ClickOutside
    },
    inject: ['root'],
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        active() {
            return this.root.namePath.includes(this.name)
        }
    },
    data() {
        return {
            open: false,
        }
    },
    methods: {
        onClick() {
            this.open = !this.open
        },
        close() {
            this.open = false
        },
        updateNamePath() {
            this.root.namePath.unshift(this.name)
            if (this.$parent.updateNamePath) {
                this.$parent.updateNamePath()
            } else {
                // this.root.namePath = []
            }
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_var.scss";
.yu-sub-nav {
    position: relative;
    &.active {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid $blue;
            width: 100%;
        }
    }
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