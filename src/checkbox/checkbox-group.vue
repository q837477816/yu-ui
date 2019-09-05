<template>
    <div class="yu-checkbox-group">
        <slot />
    </div>
</template>

<script>
import {findComponentsDownward} from '../utils'
export default {
    name: 'YuCheckboxGroup',
    props: {
        value: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentValue: this.value,
            children: []
        }
    },
    watch: {
        value() {
            this.updateModel(true)
        }
    },
    mounted() {
        this.updateModel(true)
    },
    methods: {
        updateModel(update) {
            this.children = findComponentsDownward(this, 'YuCheckbox')
            if (this.children) {
                const {value} = this
                this.children.forEach(child => {
                    child.model = value

                    if (update) {
                        child.currentValue = value.includes(child.label)
                        child.group = true
                    }
                })
            }
        },
        change(data) {
            this.currentValue = data
            this.$emit('input', data)
            this.$emit('change', data)
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-checkbox-group {
    .yu-checkbox + .yu-checkbox {
        margin-left: 8px;
    }
}
</style>