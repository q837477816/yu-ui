<template>
    <div>
        <yu-layout style="color: #000;">
            <yu-header style="height: 30px; background: #B3C0D1;">header</yu-header>
            <yu-content style="height: 100px; background: #E9EEF3;">content</yu-content>
        </yu-layout>
        <pre><code>{{usage}}</code></pre>
    </div>
</template>

<script>
import YuLayout from '../../../src/layout'
import YuHeader from '../../../src/header'
import YuSider from '../../../src/sider'
import YuContent from '../../../src/content'
import YuFooter from '../../../src/footer'
export default {
    name: 'LayoutDemos',
    components: {
        YuLayout,
        YuHeader,
        YuSider,
        YuContent,
        YuFooter,
    },
    data() {
        return {
            usage: `
                <yu-layout style="color: #000; margin-bottom:50px;">
                    <yu-header style="height: 30px; background: #B3C0D1;">header</yu-header>
                    <yu-content style="height: 100px; background: #E9EEF3;">content</yu-content>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim()
        }
    }
    
}
</script>