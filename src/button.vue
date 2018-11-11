<template>
    <button class="yu-button">按钮</button>
</template>

<script>
export default {
    name: 'yu-button'
}
</script>

<style lang="scss">
    .yu-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover)
        }
        &:active{
            background-color: var(--button-active-bg) 
        }
        &:focus{
            outline: none;
        }
    }
</style>
