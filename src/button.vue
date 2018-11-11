<template>
    <button 
        class="yu-button"
        :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: 'yu-button',
    // props: ['icon', 'iconPosition']
    props: {
        icon: {},
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
    }
</style>
