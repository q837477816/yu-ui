<template>
    <div>
        <div>
            <p>基础用法，从顶部出现，5 秒后自动消失，或者点击关闭按钮关闭提示</p>
            <yu-button @click="$toast('提示消息')">打开提示</yu-button>
            
            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>可以通过设置 postion 属性改变提示展示的位置，可选的有 top、bottom、center，默认为 top</p>
            <yu-button @click="$toast('提示消息', {position: 'bottom'})">下方</yu-button>
            <yu-button @click="$toast('提示消息', {position: 'center'})">中间</yu-button>

            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>通过设置 autoClose 来设置消息提示的时长，默认为 5，可通过设置 false 取消自动关闭提示语</p>
            <yu-button @click="$toast('提示2s', {autoClose: 2})">提示2秒</yu-button>
            <yu-button @click="$toast('不自动关闭', {autoClose: false})">不关闭</yu-button>

            <pre><code>{{usage3}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>自定义关闭按钮</p>
            <yu-button @click="$toast('网络连接异常，请稍后重试！', {closeButton: {
                text: '知道了',
                callback: () => {
                    console.log('重新刷新')
                }
            }})">打开提示</yu-button>

            <pre><code>{{usage4}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>自定义展示HTML，通过设置 enableHtml 属性即可</p>
            <yu-button @click="open">打开提示</yu-button>

            <pre><code>{{usage5}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuButton from 'src/button/button'
import plugin from 'src/toast/plugin'
import Vue from 'vue'
Vue.use(plugin)
export default {
    name: 'ToastDemos',
    components: { YuButton },
    data() {
        return {
            usage1: `
                <yu-button @click="$toast('弹出消息提示')">打开消息提示</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-button @click="$toast('提示消息', {position: 'bottom'})">下方</yu-button>
                <yu-button @click="$toast('提示消息', {position: 'center'})">中间</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-button @click="$toast('提示2s', {autoClose: 2})">提示2秒</yu-button>
                <yu-button @click="$toast('不自动关闭', {autoClose: false})">不关闭</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
            usage4: `
                <yu-button @click="$toast('网络连接异常，请稍后重试！', {closeButton: {
                    text: '知道了',
                    callback: () => {
                        console.log('重新刷新')
                    }
                }})">打开提示</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
            usage5: `
                <yu-button @click="open">打开提示</yu-button>

                methods: {
                    open () {
                        this.$toast('<a href="http://www.baidu.com">百度一下</a>', {enableHtml: true})
                    }
            `.replace(/^ {16}/gm, '').trim(),
        }
    },
    methods: {
        open() {
            this.$toast('<a href="http://www.baidu.com">百度一下</a>', {enableHtml: true})
        }
    }
    
}
</script>

