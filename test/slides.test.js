import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import Vue from 'vue'
import Slides from '../src/slides/slides'
import SlidesItem from '../src/slides/slides-item'
Vue.component('yu-slides-item', SlidesItem)


describe('Slides', () => {

    it('存在.', () => {
        expect(Slides).to.be.exist
    })

    it('接受SlidesItem，默认展示第一个', (done) => {
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        }, 1000);
    })

    it('selected 是什么，选择的就是什么', (done) => {
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            },
            propsData: {
                selected: '3'
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box3').exists()).to.be.true
            done()
        }, 1000);
    })

    it('点击第二个就展示第二个', (done) => {
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            },
            propsData: {
                selected: '1'
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
            expect(callback).have.been.calledWith('1')
            done()
        })
    })

    it('可以自动播放', (done) => { // TODO: 存在bug
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            },
            propsData: {
                autoPlay: true,
                autoPlayDelay: 100,
                selected: '1'
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.called
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 101);
    })

    it('可以点击上一张', (done) => {
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            },
            propsData: {
                selected: '1'
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-action="prev"]').trigger('click')
            expect(callback).to.have.been.calledWith('3')
            done()
        }, 101);
    })

    it('可以点击下一张', (done) => {
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <yu-slides-item name="1">
                        <div class="box1">1</div>
                    </yu-slides-item>
                    <yu-slides-item name="2">
                        <div class="box2">2</div>
                    </yu-slides-item>
                    <yu-slides-item name="3">
                        <div class="box3">3</div>
                    </yu-slides-item>
                `
            },
            propsData: {
                selected: '1'
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-action="next"]').trigger('click')
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 101);
    })

})