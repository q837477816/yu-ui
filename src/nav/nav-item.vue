<template>
    <div class="yu-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    name: 'YuNavItem',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        onClick() {
            this.$emit('add:selected', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-nav-item {
    padding: 0.5em 1em;
    &.selected {
        background-color: red;
    }
}
</style>