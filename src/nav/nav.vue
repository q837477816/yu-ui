<template>
    <div :class="['yu-nav', {vertical}]">
        <slot></slot>
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
        multiple: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array,
            default: () => []
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
        this.listenToChildren()
        
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
                if (this.selected.includes(vm.name)) {
                    vm.selected = true
                } else {
                    vm.selected = false
                }
            })
        },
        listenToChildren() {
            this.items.forEach(vm => {
            vm.$on('add:selected', (name) => {
                if (this.multiple) {
                    if (!this.selected.includes(name)) {
                        let copy = JSON.parse(JSON.stringify(this.selected))
                        copy.push(name)
                        this.$emit('update:selected', copy)
                    }
                } else {
                    this.$emit('update:selected', [name])
                }
            })
        })
        }
    }

}
</script>

<style lang="scss" scoped>
@import "../styles/_var.scss";
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


