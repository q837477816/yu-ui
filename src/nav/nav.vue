<template>
    <div class="yu-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'YuNav',
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        items() {
            return this.$children.filter(vm => vm.$options.name === 'YuNavItem')
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
.yu-nav {
    display: flex;
    border: 1px solid red;
}
</style>


