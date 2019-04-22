<template>
    <div class="yu-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
    
</template>

<script>
export default {
    name: 'YuNavItem',
    inject: ['root'],
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
    created() {
        this.root.addItem(this)
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