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
@import "../styles/_var.scss";
.yu-nav-item {
    padding: 0.5em 1em;
    position: relative;
    &.selected {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid $blue;
            width: 100%;
        }
    }
}
.yu-sub-nav .yu-nav-item {
    
    &.selected {
        background: $grey;
        color: $color;
        &::after {
            display: none;
        }
    }
}
</style>