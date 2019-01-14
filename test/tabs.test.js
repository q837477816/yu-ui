const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('yu-tabs', Tabs)
Vue.component('yu-tabs-head', TabsHead)
Vue.component('yu-tabs-body', TabsBody)
Vue.component('yu-tabs-item', TabsItem)
Vue.component('yu-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.be.exist
    })

    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <yu-tabs selected="finance">
            <yu-tabs-head>
                <yu-tabs-item name="woman">美女</yu-tabs-item>
                <yu-tabs-item name="finance">财经</yu-tabs-item>
                <yu-tabs-item name="sports">体育</yu-tabs-item>
            </yu-tabs-head>
            <yu-tabs-body>
                <yu-tabs-pane name="woman">美女相关资讯</yu-tabs-pane>
                <yu-tabs-pane name="finance">财经相关资讯</yu-tabs-pane>
                <yu-tabs-pane name="sports">体育相关资讯</yu-tabs-pane>
            </yu-tabs-body>
        </yu-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    it('接受 direction 属性', () => {
        // TODO: 接受direction 属性
    })

})