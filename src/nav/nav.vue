<template>
    <div :class="['yu-nav', {vertical}]">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'YuNav',
    provide() {
        return {
            root: this,
            vertical: this.vertical
        }
    },
    props: {
        selected: {
            type: String,
            required: true
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            items: [],
            namePath: []
        }
    },
    mounted() {
        this.updateChildren()
    },
    updated() {
        this.updateChildren()
    },
    methods: {
        addItem(vm) {
            this.items.push(vm)
        },
        updateChildren() {
            this.items.forEach(vm => {
                if (this.selected === vm.name) {
                    vm.selected = true
                } else {
                    vm.selected = false
                }
            })
        }
    }

}
</script>

<style lang="scss" scoped>
@import "~_var.scss";
.yu-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
    cursor: default;
    user-select: none;
    &.vertical {
        flex-direction: column;
        border: 1px solid $grey;
    }
}
</style>


