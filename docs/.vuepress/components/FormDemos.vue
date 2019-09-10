<template>
    <div>
        <div>
            <p>完整用法</p>
        
            <yu-form ref="form" :model="form" :rules="rules">
                <yu-form-item label="用户名" prop="username">
                    <yu-input v-model="form.username"></yu-input>
                </yu-form-item>
                <yu-form-item label="邮箱" prop="email">
                    <yu-input v-model="form.email"></yu-input>
                </yu-form-item>
                <yu-form-item label="手机" prop="phone">
                    <yu-input v-model="form.phone"></yu-input>
                </yu-form-item>
            </yu-form>

            <yu-button @click="resetForm">重置表单</yu-button>
            <yu-button @click="validateForm1">校验表单(回调)</yu-button>
            <yu-button @click="validateForm2">校验表单(Promise)</yu-button>

            <pre><code>{{usage}}</code></pre>
        </div>

    </div>
</template>

<script>
import YuForm from 'src/form/form'
import YuFormItem from 'src/form/form-item'
import YuInput from 'src/input/input'
import YuButton from 'src/button/button'
import plugin from 'src/toast/plugin'
import Vue from 'vue'
Vue.use(plugin)
export default {
    name: 'YuFormDemos',
    components: { YuForm, YuFormItem, YuInput, YuButton },
    data() {
        return {
            form: {
                username: 'Paul',
                email: 'paul@xxx.com',
                phone: '111'
            },
            rules: {
                username: [
                    {required: true, message: '用户名不能为空', trigger: 'blur'}
                ],
                email: [
                    {required: true, message: '邮箱不能为空', trigger: 'blur'},
                    {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                ]
            },
            usage: `
                <yu-form ref="form" :model="form" :rules="rules">
                    <yu-form-item label="用户名" prop="username">
                        <yu-input v-model="form.username"></yu-input>
                    </yu-form-item>
                    <yu-form-item label="邮箱" prop="email">
                        <yu-input v-model="form.email"></yu-input>
                    </yu-form-item>
                    <yu-form-item label="手机" prop="phone">
                        <yu-input v-model="form.phone"></yu-input>
                    </yu-form-item>
                </yu-form>

                <yu-button @click="resetForm">重置表单</yu-button>
                <yu-button @click="validateForm1">校验表单(回调)</yu-button>
                <yu-button @click="validateForm2">校验表单(Promise)</yu-button>

                data() {
                    return {
                        form: {
                            username: 'Paul',
                            email: 'paul@xxx.com'
                        },
                        rules: {
                            username: [
                                {required: true, message: '用户名不能为空', trigger: 'blur'}
                            ],
                            email: [
                                {required: true, message: '邮箱不能为空', trigger: 'blur'},
                                {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                            ]
                        }
                    }
                },
                methods: {
                    resetForm() {
                        this.$refs.form.resetFields()
                    },
                    validateForm1() {
                        this.$refs.form.validate((valid) => {
                            if (valid) {
                                this.$toast('校验成功')
                            } else {
                                this.$toast('校验失败')
                            }
                        })
                    },
                    validateForm2() {
                        this.$refs.form.validate().then(valid => {
                            if (valid) {
                                this.$toast('校验成功')
                            } else {
                                this.$toast('校验失败')
                            }
                        })
                    }
                }
            `.replace(/^ {16}/gm, '').trim()
        }
    },
    methods: {
        resetForm() {
            this.$refs.form.resetFields()
        },
        validateForm1() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$toast('校验成功')
                } else {
                    this.$toast('校验失败')
                }
            })
        },
        validateForm2() {
            this.$refs.form.validate().then(valid => {
                if (valid) {
                    this.$toast('校验成功')
                } else {
                    this.$toast('校验失败')
                }
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-button {
    margin-top: 8px;
}
</style>

