<template>
    <div ref="popover" class="yu-popover">
        <div 
            v-if="visible"
            ref="contentWrapper" 
            :class="['yu-popover-content-wrapper', `position-${position}`, customClass]">
            <slot name="content" :close="close" />
        </div>
        <span ref="triggerWrapper" class="yu-popover-trigger-wrapper">
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    name: 'YuPopover',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].includes(value)
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].includes(value)
            }
        },
        customClass: {
            type: String,
            required: false,
            default: undefined
        },
        container: {
            type: Element,
            required: false,
            default: undefined
        }
    },
    data() {
        return {
            visible: false
        }
    },
    mounted() {
        if (this.trigger === 'click') {
            this.$refs.popover.addEventListener('click', this.onClick)
        } else {
            this.$refs.popover.addEventListener('mouseenter', this.open)
            this.$refs.popover.addEventListener('mouseleave', this.close)
        }
    },
    beforeDestroy() {
        this.$refs.popover.removeEventListener('click', this.onClick)
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
    },
    methods: {
        updateContentPosition() {
            const {contentWrapper, triggerWrapper} = this.$refs
            const container = this.container || document.body
            container.appendChild(contentWrapper)
            const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
            const {height: height2} = contentWrapper.getBoundingClientRect()
            const positions = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX
                },
                bottom: {
                    top: top + height + window.scrollY,
                    left: left + window.scrollX
                },
                left: {
                    top: top + window.scrollY - (height2 - height) / 2,
                    left: left + window.scrollX
                },
                right: {
                    top: top + window.scrollY - (height2 - height) / 2,
                    left: left + width + window.scrollX
                }
            }
            contentWrapper.style.left = positions[this.position].left + 'px'
            contentWrapper.style.top = positions[this.position].top + 'px'
        },

        onClickDocument(e) {
            if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) { return }
            if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) { return }
            this.close()
        },

        open() {
            this.visible = true
            this.$emit('open')
            this.$nextTick(() => {
                this.updateContentPosition()
                document.addEventListener('click', this.onClickDocument)
            })
        },

        close() {
            this.visible = false
            this.$emit('close')
            document.removeEventListener('click', this.onClickDocument)
        },

        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .yu-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .yu-popover-content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius:  $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background-color: #fff;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }
        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);
            &::before, &::after {
                left: 10px;
                border-bottom: none;
            }
            &::before {
                border-top-color: black;
                top: 100%;
            }
            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                border-top: none;
                left: 10px;
            }
            &::before {
                border-bottom-color: black;
                bottom: 100%;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }
            &::before {
                border-left-color: black;
                left: 100%;
            }
            &::after {
                border-left-color: white;
                left: calc(100% - 1px);
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }
            &::before {
                border-right-color: black;
                right: 100%;
            }
            &::after {
                border-right-color: white;
                right: calc(100% - 1px);
            }
        }
    }
    .yu-popover-trigger-wrapper {
        display: inline-block;
    }
</style>
