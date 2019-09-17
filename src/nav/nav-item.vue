<template>
    <div 
        :class="['yu-nav-item', {selected, vertical}]" 
        :data-name="name"
        @click="onClick">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuNavItem',
    inject: ['root', 'vertical'],
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
            this.root.namePath = []
            this.$parent.$options.name === 'YuSubNav' && this.$parent.updateNamePath()
            this.root.$emit('update:selected', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-nav-item {
    padding: 10px 20px;
    position: relative;
    &:not(.vertical) {
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
    &.vertical {
        &.selected {
            color: $blue;
        }
    }
}
.yu-sub-nav .yu-nav-item:not(.vertical) {
    &.selected {
        background: $grey;
        color: $color;
        &::after {
            display: none;
        }
    }
}
</style>