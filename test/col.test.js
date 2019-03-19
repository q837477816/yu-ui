import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Col from '../src/col'

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Col).to.be.exist
    })

    it('接受 span 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                span: 1
            }
        })
        expect(wrapper.classes('col-1')).to.be.true
    })

    it('接受 offset 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                offset: 1
            }
        })
        expect(wrapper.classes('offset-1')).to.be.true
    })

    it('接受 pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pc: {span: 1, offset: 2}
            }
        })
        expect(wrapper.classes('col-pc-1')).to.be.true
        expect(wrapper.classes('offset-pc-2')).to.be.true
    })

    it('接受 pad 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                pad: {span: 1, offset: 2}
            }
        })
        expect(wrapper.classes('col-pad-1')).to.be.true
        expect(wrapper.classes('offset-pad-2')).to.be.true
    })

    it('接受 narrow-pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: {span: 1, offset: 2}
            }
        })
        expect(wrapper.classes('col-narrow-pc-1')).to.be.true
        expect(wrapper.classes('offset-narrow-pc-2')).to.be.true
    })

    it('接受 wide-pc 属性', () => {
        const wrapper = mount(Col, {
            propsData: {
                widePc: {span: 1, offset: 2}
            }
        })
        expect(wrapper.classes('col-wide-pc-1')).to.be.true
        expect(wrapper.classes('offset-wide-pc-2')).to.be.true
    })

})