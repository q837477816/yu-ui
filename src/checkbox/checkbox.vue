<template>
    <label :class="['yu-checkbox', {disabled}]">
        <span>
            <input
                v-if="group" 
                v-model="model"
                type="checkbox"
                :disabled="disabled"
                :value="label"
                @change="onChange">
            <input 
                v-else
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="onChange">
        </span>
        <slot />
    </label> 
</template>

<script>
import {findComponentUpward} from '../utils'
export default {
    name: 'YuCheckbox',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        trueValue: {
            type: [String, Number, Boolean],
            default: true
        },
        falseValue: {
            type: [String, Number, Boolean],
            default: false
        },
        label: {
            type: [String, Number, Boolean],
            default: undefined
        }
    },
    data() {
        return {
            currentValue: this.value,
            model: [],
            group: false,
            parent: null
        }
    },
    watch: {
        value(val) {
            if ([this.trueValue, this.falseValue].includes(val)) {
                this.updateModel()
            } else {
                throw 'Value should be trueValue or falseValue.'
            }
        }
    },
    mounted() {
        this.parent = findComponentUpward(this, 'YuCheckboxGroup')
        if (this.parent) this.group = true
        if (this.group) {
            this.parent.updateModel(true)
        } else {
            this.updateModel()
        }
        console.log(this.group)
    },
    methods: {
        onChange(e) {
            if (this.disabled) {
                return false
            }

            const checked = e.target.checked
            this.currentValue = checked

            const value = checked ? this.trueValue : this.falseValue
            this.$emit('input', value)
            if (this.group) {
                this.parent.change(this.model)
            } else {
                this.$emit('change', value)
            }
        },
        updateModel() {
            this.currentValue = this.value === this.trueValue
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-checkbox {
    cursor: pointer;
    &.disabled {
        cursor: not-allowed;
        input { cursor: not-allowed; }
    }
    input { cursor: pointer; }
}
</style>