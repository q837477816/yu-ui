const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import {mount} from '@vue/test-utils'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.exist
    })
    
    describe('props', () => {
        it('接受 value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '1234'
                }
            })
            expect(wrapper.find('input').element.value).to.equal('1234')
        })
    
        it('接受 disabled', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            })
            expect(wrapper.find('input').element.disabled).to.be.true
        })
    
        it('接受 readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            })
            expect(wrapper.find('input').element.readOnly).to.be.true
        })
    
        it('接受 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'errmsg'
                }
            })
            expect(wrapper.find('use').attributes('href')).to.equal('#i-error')
            expect(wrapper.find('.errorMessage').element.innerText).to.eq('errmsg')
        })
    })

    describe('事件', () => {
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                const wrapper = mount(Input)
                wrapper.vm.$emit(eventName, 'hi')
                expect(wrapper.emitted()[eventName]).to.deep.eq([['hi']])
            })
        })
    })
    
})