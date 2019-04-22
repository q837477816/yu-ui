const expect = chai.expect;
import TabsItem from '../src/tab/tabs-item'
import {mount} from '@vue/test-utils'


describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.be.exist
    })

    it('接受 name 属性', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                name: 'xxx'
            }
        })
        expect(wrapper.attributes('data-name')).to.eq('xxx')
    })

    it('接受 disabled 属性', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                disabled: true
            }
        })
        expect(wrapper.classes('disabled')).to.be.true
        const callback = sinon.fake()
        wrapper.vm.$on('click', callback)
        wrapper.vm.$el.click()
        expect(callback).to.have.not.been.called
    })


})