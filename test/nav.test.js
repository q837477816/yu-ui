import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Nav from '../src/nav/nav'
import NavItem from '../src/nav/nav-item'
import SubNav from '../src/nav/sub-nav'

describe('Nav.vue', () => {
    it('存在.', () => {
        expect(Nav).to.be.exist
    })

    it('支持 selected 属性', (done) => {
        Vue.component('yu-nav-item', NavItem)
        Vue.component('yu-sub-nav', SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <yu-nav-item name="home">首页</yu-nav-item>
                    <yu-sub-nav name="about">
                        <template slot="title">关于</template>
                        <yu-nav-item name="culture">企业文化</yu-nav-item>
                        <yu-nav-item name="team">开发团队</yu-nav-item>
                    </yu-sub-nav>
                    <yu-nav-item name="hire">招聘</yu-nav-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
            done()
        })
    })

    it('支持 vertical 属性', (done) => {
        Vue.component('yu-nav-item', NavItem)
        Vue.component('yu-sub-nav', SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home',
                vertical: true
            },
            slots: {
                default: `
                    <yu-nav-item name="home">首页</yu-nav-item>
                    <yu-sub-nav name="about">
                        <template slot="title">关于</template>
                        <yu-nav-item name="culture">企业文化</yu-nav-item>
                        <yu-nav-item name="team">开发团队</yu-nav-item>
                    </yu-sub-nav>
                    <yu-nav-item name="hire">招聘</yu-nav-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.classes('vertical')).to.be.true
            done()
        })
    })

    it('会触发 update:selected 事件', (done) => {
        const callback = sinon.fake()
        Vue.component('yu-nav-item', NavItem)
        Vue.component('yu-sub-nav', SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <yu-nav-item name="home">首页</yu-nav-item>
                    <yu-sub-nav name="about">
                        <template slot="title">关于</template>
                        <yu-nav-item name="culture">企业文化</yu-nav-item>
                        <yu-nav-item name="team">开发团队</yu-nav-item>
                    </yu-sub-nav>
                    <yu-nav-item name="hire">招聘</yu-nav-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-name="team"]').trigger('click')
            expect(callback).to.have.been.calledWith('team')
            done()
        })
    })

})