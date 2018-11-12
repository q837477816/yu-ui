<template>
    <button 
        class="yu-button"
        :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <yu-icon class="icon" v-if="icon && !loading" :name="icon"></yu-icon>
        <yu-icon class="loading icon" v-if="loading" name="loading"></yu-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
export default {
    name: 'yu-button',
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

<style lang="scss">
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
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align: middle;
        &:hover{
            border-color: var(--border-color-hover)
        }
        &:active{
            background-color: var(--button-active-bg) 
        }
        &:focus{
            outline: none;
        }
        > .icon{
            order: 1;
            margin-right: .3em;
        }
        > .content{
            order: 2;
        }
        &.icon-right{
            > .content{
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
