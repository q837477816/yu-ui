import chai,{expect} from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {mount} from '@vue/test-utils'
import Uploader from '../src/uploader'
import ajax from '../src/ajax'

describe('Uploader.vue', (done) => {
    it('存在.', () => {
        expect(Uploader).to.be.exist
    })
    it('可以上传一个文件', (done) => {
        const stub = sinon.stub(ajax, 'post').callsFake((url, options) => {
            setTimeout(() => {
                options.success(JSON.stringify({id: '111'}))
            }, 100)
        })
        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/xxx',
                method: 'post',
                parseResponse: (response) => {
                    let obj = JSON.parse(response)
                    return `/preview/${obj.id}`
                },
                fileList: []
            },
            slots: {
                default: `<button id="btn">click me</button>`
            },
            listeners: {
                'update:fileList': (fileList) => {
                    wrapper.setProps({fileList})
                },
                'uploaded': () => {
                    expect(wrapper.find('use').exists()).to.be.false
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/111')
                    stub.restore()
                    done()
                }
            }
        })
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        let file1 = new File(['content1'], 'file1.txt')

        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files

        inputWrapper.trigger('change')
        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    })
})