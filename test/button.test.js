import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import Button from '../src/button'

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Button).to.be.exist
    })

    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes('href')).to.equal('#i-settings')
    })

    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes('href')).to.equal('#i-loading')
    })

    it('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'settings',
            }
        })
        const icon = wrapper.find('svg').element
        expect(getComputedStyle(icon).order).to.eq('1')
    })

    it('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        const icon = wrapper.find('svg').element
        expect(getComputedStyle(icon).order).to.eq('2')
    })

    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        })
        const callback = sinon.fake();
        const vm = wrapper.vm
        vm.$on('click', callback)
        wrapper.trigger('click')
        expect(callback).to.have.been.called
    })
})