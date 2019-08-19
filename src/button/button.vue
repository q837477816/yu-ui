<template>
    <button 
        :class="[
            'yu-button', 
            {[`icon-${iconPosition}`]: true},
            {'yu-button--disabled': disabled}
        ]"
        @click="onClick">
        <yu-icon v-if="iconVisible" class="icon" :name="icon" />
        <yu-icon v-if="loading" class="loading icon" name="loading" />
        <div class="yu-content">
            <slot />
        </div>
    </button>
</template>

<script>
import YuIcon from '../icon'
export default {
    name: 'YuButton',
    components: { YuIcon },
    props: {
        icon: {
            type: String,
            default: undefined,
            required: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(val) {
                return ['left', 'right'].includes(val)
            }
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    computed: {
        iconVisible() {
            return this.icon && !this.loading
        }
    },
    methods: {
        onClick() {
            !this.disabled && this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~_var.scss";
    $button-height: 32px;
    $border-color: #999;
    $button-bg: white;
    $border-color-hover: #666;
    $button-active-bg: #eee;
    .yu-button{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        vertical-align: middle;
        &:not(&--disabled) {
            cursor: pointer;
            &:hover{
                border-color: $border-color-hover;
            }
            &:active{
                background-color: $button-active-bg;
            }
            &:focus{
                outline: none;
            }

        }
        > .icon{
            order: 1;
            margin-right: .3em;
        }
        > .yu-content{
            order: 2;
        }
        &.icon-right{
            > .yu-content{
                order: 1
            }
            > .icon{
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
        &--disabled {
            outline: none;
            color: #c0c4cc;
            border-color: #ebeef5;
            cursor: not-allowed;
        }
        .loading{
            @include loading;
        }
        & + & {
            margin-left: 8px;
        }
    }
</style>
