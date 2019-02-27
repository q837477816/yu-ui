<template>
    <button 
        class="yu-button"
        :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <yu-icon class="icon" v-if="icon && !loading" :name="icon"></yu-icon>
        <yu-icon class="loading icon" v-if="loading" name="loading"></yu-icon>
        <div class="yu-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
export default {
    name: 'YuButton',
    components: {
        'yu-icon': Icon
    },
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(val) {
                return ['left', 'right'].includes(val); 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $border-radius: 4px;
    $border-color: #999;
    $button-bg: white;
    $border-color-hover: #666;
    $button-active-bg: #eee;
    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
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
        &:hover{
            border-color: $border-color-hover;
        }
        &:active{
            background-color: $button-active-bg;
        }
        &:focus{
            outline: none;
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
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>
