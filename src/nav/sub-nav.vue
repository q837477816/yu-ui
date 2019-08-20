<template>
    <div :class="['yu-sub-nav', {active, vertical}]" v-click-outside="close">
        <span class="yu-sub-nav-label" @click="onClick">
            <slot name="title"></slot>
            <span class="yu-sub-nav-icon" :class="{open, vertical}">
                <yu-icon name="right"></yu-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition name="x" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
                <div :class="['yu-sub-nav-popover', {vertical}]" v-show="open">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="yu-sub-nav-popover" v-show="open">
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
import ClickOutside from '../click-outside.js'
import YuIcon from 'src/icon/icon.vue'
export default {
    name: 'YuSubNav',
    directives: {
        ClickOutside
    },
    components: {
        YuIcon
    },
    inject: ['root', 'vertical'],
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
        enter(el, done) {
            el.style.height = 'auto'
            let {height} = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterEnter(el) {
            el.style.height = 'auto'
        },
        leave(el, done) {
            let {height} = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterLeave(el) {
            el.style.height = 'auto'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-sub-nav {
    position: relative;
    &:not(.vertical) {
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
    }
    &-label {
        padding: 10px 20px;
        display: block;
    }
    &-icon { display: none; }
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
        transition: height 250ms;
        &.vertical {
            position: static;
            border-radius: 0;
            border: none;
            box-shadow: none;
            overflow: hidden;
        }
    }
}
.yu-sub-nav .yu-sub-nav {
    &.active {
        &::after {
            display: none;
        }
    }
    .yu-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
    .yu-sub-nav-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .yu-sub-nav-icon {
        display: inline-flex;
        margin-left: 0.5em;
        svg { fill: $light-color; }
        transition: transform 250ms;
        &.vertical {
            transform: rotate(90deg);
            &.open {
                transform: rotate(270deg);
            }
        }
        &.open {
            transform: rotate(180deg);
        }
    } 
}
</style>