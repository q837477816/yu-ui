import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import validate from '../src/validate'

describe('validate', () => {
    it('存在', () => {
        expect(validate).to.exist
    })

    it('required true 报错', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.eq('必填')
    })

    it('trequired true 通过', () => {
        let data = {
            email: 0
        }
        let rules = [
            {key: 'email', required: true}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('pattern 报错', () => {
        let data = {
            email: '@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('pattern 通过', () => {
        let data = {
            email: '1111@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('pattern email 报错', () => {
        let data = {
            email: '@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.eq('格式不正确')
    })

    it('pattern email 通过', () => {
        let data = {
            email: '111@yuyu.com'
        }
        let rules = [
            {key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })

    it('required & pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email', required: true}
        ]
        let errors = validate(data, rules)
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
        let errors = validate(data, rules)
        expect(errors.email.minLength).to.eq('长度有误')
        expect(errors.email.pattern).to.exist
    })
})