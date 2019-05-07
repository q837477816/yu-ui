import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Validator from '../src/validate'

describe('validate', () => {
    it('存在', () => {
        expect(Validator).to.exist
    })

    it('required true 报错', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })

    it('trequired true 通过', () => {
        let data = {
            email: 0
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('pattern 报错', () => {
        let data = {
            email: '@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('pattern 通过', () => {
        let data = {
            email: '1111@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('pattern email 报错', () => {
        let data = {
            email: '@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('pattern email 通过', () => {
        let data = {
            email: '111@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('required & pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.eq('必填')
        expect(errors.email.pattern).to.not.exist
    })

    it('pattern & minLength', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', minLength: 6}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.minLength).to.eq('太短')
        expect(errors.email.pattern).to.exist
    })

    it('maxLength', () => {
        let data = {
            email: '123456789'
        }
        let rules = [
            {key: 'email', pattern: 'email', maxLength: 5}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.maxLength).to.eq('太长')
        expect(errors.email.pattern).to.exist
    })

    it('many keys', () => {
        let data = {
            email: '123456789'
        }
        let rules = [
            {
                key: 'email',
                required: true,
                minLength: 5,
                maxLength: 10,
                hasNumber: true
            }
        ]
        let fn = () => {
            let validator = new Validator()
            validator.validate(data, rules)
        }
        expect(fn).to.throw()
    })

    it('自定义测试规则', () => {
        let data = {
            email: 'abc'
        }
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ]
        let validator = new Validator()
        validator.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        }
        let errors
        let fn = () => {
            errors = validator.validate(data, rules)
        }
        expect(fn).to.not.throw()
        expect(errors.email.hasNumber).to.eq('必须含有数字')
    })

    it('两个validator互相不影响', () => {
        let data = {
            email: 'abc'
        }
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ]
        let validator1 = new Validator()
        let validator2 = new Validator()
        validator1.hasNumber = (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        }
        let fn1 = () => {
            validator1.validate(data, rules)
        }
        expect(fn1).to.not.throw()
        let fn2 = () => {
            validator2.validate(data, rules)
        }
        expect(fn2).to.throw()
    })

    it('将自定义规则添加到原型上', () => {
        let data = {
            email: 'abc'
        }
        let rules = [
            {key: 'email', required: true, hasNumber: true}
        ]
        let validator1 = new Validator()
        let validator2 = new Validator()
        Validator.add('hasNumber', (value) => {
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        })
        let fn1 = () => {
            validator1.validate(data, rules)
        }
        expect(fn1).to.not.throw()
        let fn2 = () => {
            validator2.validate(data, rules)
        }
        expect(fn2).to.not.throw()
    })

})