<template>
    <button 
        :class="['yu-button', {[`icon-${iconPosition}`]: true}]"
        @click="$emit('click')"
    >
        <yu-icon v-if="icon && !loading" class="icon" :name="icon" />
        <yu-icon v-if="loading" class="loading icon" name="loading" />
        <div class="yu-content">
            <slot />
        </div>
    </button>
</template>

<script>
import Icon from '../icon'
export default {
    name: 'YuButton',
    components: {
        'yu-icon': Icon
    },
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
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~_var.scss";
    $font-size: 14px;
    $button-height: 32px;
    $border-radius: 4px;
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
            width: 32px;
            height: 32px;
            @include loading;
        }
    }
</style>
