<template>
    <div class="yu-form-item">
        <label v-if="label" :class="['yu-form-item-label', {'is-required': isRequired}]">{{ label }}</label>
        <div>
            <slot />
            <div v-if="validateState === 'error'" class="yu-form-item-error-message">
                {{ errorMessage }}
            </div>
        </div>
    </div>
</template>

<script>
import Emitter from 'src/mixins/emitter'
import AsyncValidator from 'async-validator'
export default {
    name: 'YuFormItem',
    mixins: [ Emitter ],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: undefined
        }
    },
    inject: ['form'],
    data() {
        return {
            isRequired: false,
            validateState: '',
            errorMessage: ''
        }
    },
    computed: {
        fieldValue() {
            return this.form.model[this.prop]
        }
    },
    mounted() {
        if (this.prop) {
            this.dispatch('YuForm', 'on-form-item-add', this)
            this.initialValue = this.fieldValue
            this.setRules()
        }
    },
    beforeDestroy() {
        this.prop && this.dispatch('YuForm', 'on-form-item-remove', this)
    },
    methods: {
        setRules() {
            const rules = this.getRules()
            this.isRequired = rules.some(rule => rule.required)
            this.$on('on-form-blur', this.onFieldBlur)
            this.$on('on-form-change', this.onFieldChange)
        },
        getRules() {
            const formItemRules = this.form.rules ? this.form.rules[this.prop] : []
            return [].concat(formItemRules || [])
        },
        getFilteredRule(trigger) {
            const rules = this.getRules()
            return trigger ? rules.filter(rule => rule.trigger && rule.trigger.includes(trigger)) : rules
        },
        validate(trigger, callback = () => {}) {
            const rules = this.getFilteredRule(trigger)
            if (!rules || !rules.length) {
                this.validateState = 'success'
                this.errorMessage = ''
                return callback(this.errorMessage)
            }
            this.validateState = 'validating'
            const descriptor = {[this.prop]: rules}
            const validator = new AsyncValidator(descriptor)
            const model = {[this.prop]: this.fieldValue}
            validator.validate(model, { firstFields: true }, errors => {
                this.validateState = !errors ? 'success' : 'error'
                this.errorMessage = errors ? errors[0].message : ''
                callback(this.errorMessage)
            })
        },
        onFieldBlur() {
            this.validate('blur')
        },
        onFieldChange() {
            this.validate('change')
        },
        resetField() {
            this.validateState = ''
            this.errorMessage = ''
            this.form.model[this.prop] = this.initialValue
        }
    }
}
</script>

<style lang="scss" scoped>
.yu-form-item {
    &-label {
        &.is-required:before{
            content: '*';
            color: red;
        }
    }
    &-error-message {
        color: red;
    }
}
</style>