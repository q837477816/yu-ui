<template>
    <label>
        <span>
            <input 
                type="checkbox"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span>
        <slot />
    </label> 
</template>

<script>
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
        }
    },
    data() {
        return {
            currentValue: this.value
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
    methods: {
        change(e) {
            if (this.disabled) {
                return false
            }

            const checked = e.target.checked
            this.currentValue = checked

            const value = checked ? this.trueValue : this.falseValue
            this.$emit('input', value)
            this.$emit('change', value)
        },
        updateModel() {
            this.currentValue = this.value === this.trueValue
        }
    }
}
</script>