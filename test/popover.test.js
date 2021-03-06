import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import Popover from '../src/popover/popover'

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Popover).to.be.exist
    })

    it('可以接收 position', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        let classes = wrapper.find('.yu-popover-content-wrapper').classes()
        expect(classes).to.include('position-bottom')
    })

    it('可以设置 trigger', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                trigger: 'hover'
            }
        })
        expect(wrapper.find('.yu-popover-content-wrapper').element).to.not.exist
        wrapper.find('.yu-popover').trigger('mouseenter')
        expect(wrapper.find('.yu-popover-content-wrapper').element).to.exist
    })
})