<template>
    <div class="yu-toast-wrapper" :class="toastClasses">
        <div ref="toast" class="yu-toast">
            <div class="message">
                <slot v-if="!enableHtml" />
                <div v-else v-html="$slots.default[0]" />
            </div>
            <div ref="line" class="line" />
            <span 
                v-if="closeButton" 
                class="close"  
                @click="onClickClose">
                {{ closeButton.text }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'YuToast',
    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 5,
            validator(value) {
                return value === false || typeof value === 'number'
            }
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
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoClose * 1000)
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
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .yu-toast {
        &-wrapper {
            z-index: 2000;
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            $animation-duration: 250ms;
            &.position-top {
                top: 0;
                .yu-toast {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    animation: slide-down $animation-duration;
                }
            }
            &.position-bottom {
                bottom: 0;
                .yu-toast {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    animation: slide-up $animation-duration;
                }
            }
            &.position-middle {
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                .yu-toast {
                    animation: fade-in $animation-duration;
                }
            }
        }
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
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
            cursor: pointer;
        }
        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        
    }
</style>

