const expect = chai.expect;
import Vue from 'vue'
import Slides from '../src/slides'
import SlidesItem from '../src/slides-item'
Vue.component('yu-slides', Slides)
Vue.component('yu-slides-item', SlidesItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Slides', () => {

    it('存在.', () => {
        expect(Slides).to.be.exist
    })

    it('接受SlidesItem，默认展示第一个', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <yu-slides>
                <yu-slides-item name="name1">
                    <div class="box1">1</div>
                </yu-slides-item>
                <yu-slides-item name="name2">
                    <div class="box2">2</div>
                </yu-slides-item>
                <yu-slides-item name="name3">
                    <div class="box3">3</div>
                </yu-slides-item>
            </yu-slides>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            let box1 = vm.$el.querySelector('.box1')
            expect(box1).to.exist
            done()
        })
    })

})