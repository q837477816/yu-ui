const expect = chai.expect;
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.be.exist
    })

    it('接受 gutter 属性', (done) => {
        Vue.component('yu-row', Row)
        Vue.component('yu-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <yu-row gutter="20">
                <yu-col span="12"></yu-col>
                <yu-col span="12"></yu-col>
            </yu-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 1000)
    })

    it('接受 align 属性', () => {
        const wrapper = mount(Row, {
            attachToDocument: true,
            propsData: {
                align: 'right'
            }
        })
        expect(getComputedStyle(wrapper.element).justifyContent).to.eq('flex-end')
    })

})