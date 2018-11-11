<template>
    <div class="yu-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .yu-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .yu-button{
            border-radius: 0;
            // &:not(:first-child){
            //     border-left: none;
            // }
            margin-left: -1px;
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>


