<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
export default {
    name: "YuToast",
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 3
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].includes(value)
            }
        }
    },
    computed: {
        toastClasses() {
            return [`position-${this.position}`]
        }
    },
    mounted() {
        this.updateStyles()
        this.execAutoClose()
    },
    methods: {
        updateStyles() {
            this.$nextTick(() => {
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        close() {
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 100%;
            transform: translateY(0%)
        }
    }
    .toast {
        animation: fade-in 1s;
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        position: fixed;
        left: 50%;
        display: flex;
        align-items: center;
        color: white;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.50);
        padding: 0 16px;
        .message {
            padding: 8px 0;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;

        }
        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>

