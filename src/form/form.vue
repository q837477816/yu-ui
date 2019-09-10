<template>
    <form class="yu-form">
        <slot />
    </form>
</template>

<script>
export default {
    name: 'YuForm',
    props: {
        model: {
            type: Object,
            default: () => {
                return {}
            }
        },
        rules: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    provide() {
        return {
            form: this
        }
    },
    data() {
        return {
            formItems: []
        }
    },
    created() {
        this.$on('on-form-item-add', (vm) => {
            vm && this.formItems.push(vm)
        })
        this.$on('on-form-item-remove', (vm) => {
            if (vm.prop) {
                const idx = this.formItems.indexOf(vm)
                this.formItems.splice(idx, 1)
            }
        })
    },
    methods: {
        resetFields() {
            this.formItems.forEach(formItem => {
                formItem.resetField()
            })
        },
        validate(callback) {
            return new Promise(resolve => {
                let valid = true
                let count = 0
                this.formItems.forEach(formItem => {
                    formItem.validate('', (errMsg) => {
                        if (errMsg) valid = false
                        if (++count === this.formItems.length) {
                            resolve(valid)
                            typeof callback === 'function' && callback(valid)
                        }
                    })
                })
            })
        }
    }
}
</script>