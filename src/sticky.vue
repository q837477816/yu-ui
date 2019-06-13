<template>
    <div class="yu-sticky" ref="wrapper" :style="computedHeight">
        <div class="yu-sticky-inner-wrapper" :class="classes" :style="computedStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuSticky',
    props: {
        distance: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            sticky: false,
            top: undefined,
            left: undefined,
            width: undefined,
            height: undefined  
        }
    },
    computed: {
        classes() {
            return {
                sticky: this.sticky
            }
        },
        computedHeight() {
            return {
                height: this.height + 'px'
            }
        },
        computedStyle() {
            return {
                width: this.width + 'px',
                left: this.left + 'px',
                top: this.distance + 'px'
            }
        }
    },
    mounted() {
        this.top = this.getTop()
        this.windowScrollListener = this._windowScrollListener.bind(this)
        window.addEventListener('scroll', this.windowScrollListener)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.windowScrollListener)
    },
    methods: {
        getTop() {
            let {top} = this.$refs.wrapper.getBoundingClientRect()
            return top + window.scrollY
        },
        _windowScrollListener() {
            if (window.scrollY > this.top - this.distance) {
                const {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
                this.height = height
                this.left = left
                this.width = width
                this.sticky = true
            } else {
                this.sticky = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-sticky {
    &-inner-wrapper {
        &.sticky {
            background-color: red;
            position: fixed;
        }
    }
}
</style>


