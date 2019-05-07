class Validator {
    constructor() {

    }
    static add(name, fn) {
        Validator.prototype[name] = fn
    }
    validate(data, rules) {
        let errors = {}
        rules.forEach(rule => {
            let value = data[rule.key]
            if (rule.required) {
                let error = this.required(value)
                if (error) {
                    ensureObject(errors, rule.key)
                    errors[rule.key].required = error
                    return
                }
            }
            let validators = Object.keys(rule).filter(key => !['key', 'required'].includes(key))
            validators.forEach(validator => {
                if (this[validator]) {
                    let error = this[validator](value, rule[validator])
                    if (error) {
                        ensureObject(errors, rule.key)
                        errors[rule.key][validator] = error
                    }
                } else {
                    throw `不存在校验器：${validator}`
                }
            })
        })
        return errors
    }
    required(value) {
        if (!value && value !== 0) {
            return '必填'
        }
    }
    pattern(value, pattern) {
        if (pattern === 'email') {
            pattern = /^.+@.+$/
        }
        if (!pattern.test(value)) {
            return '格式不正确'
        }
    }
    minLength(value, minLength) {
        if (value.length < minLength) {
            return '太短'
        }
    }
    maxLength(value, maxLength) {
        if (value.length > maxLength) {
            return '太长'
        }
    }
}

function ensureObject(obj, key) {
    if (typeof obj[key] !== 'object') {
        obj[key] = {}
    }
}

export default Validator