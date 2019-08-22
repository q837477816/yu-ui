<template>
    <div>
        <div>
            <p>header + content 布局</p>
            <yu-layout style="color: #000;">
                <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
            </yu-layout>
            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>header + content + footer 布局</p>
            <yu-layout style="color: #000;">
                <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
            </yu-layout>
            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>sider + content 布局</p>
            <yu-layout style="color: #000;">
                <yu-sider style="height: 200px; width: 25%; background: #d3dce6;">sider</yu-sider>
                <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
            </yu-layout>
            <pre><code>{{usage3}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>header + sider + content 布局</p>
            <yu-layout style="color: #000;">
                <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                <yu-layout>
                    <yu-sider style="height: 200px; width: 25%; background: #d3dce6;">sider</yu-sider>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                </yu-layout>
            </yu-layout>
            <pre><code>{{usage4}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>header + sider + content + footer 布局</p>
            <yu-layout style="color: #000;">
                <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                <yu-layout>
                    <yu-sider style="height: 200px; width: 25%; background: #d3dce6;">sider</yu-sider>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                </yu-layout>
                <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
            </yu-layout>
            <pre><code>{{usage5}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>header + sider + content + footer 布局</p>
            <yu-layout style="color: #000;">
                <yu-sider style="height: 320px; width: 25%; background: #d3dce6;">sider</yu-sider>
                <yu-layout>
                    <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                    <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
                </yu-layout>
            </yu-layout>
            <pre><code>{{usage6}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuLayout from 'src/layout/layout'
import YuHeader from 'src/layout/header'
import YuSider from 'src/layout/sider'
import YuContent from 'src/layout/content'
import YuFooter from 'src/layout/footer'
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
            usage1: `
                <yu-layout style="color: #000;">
                    <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-layout style="color: #000;">
                    <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                    <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-layout style="color: #000;">
                    <yu-sider style="height: 200px; width: 25%; background: #B3C0D1;">sider</yu-sider>
                    <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
            usage4: `
                <yu-layout style="color: #000;">
                    <yu-header style="height: 60px; background: #B3C0D1;"></yu-header>
                    <yu-layout>
                        <yu-sider style="height: 200px; width: 25%; background: #d3dce6;">sider</yu-sider>
                        <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                    </yu-layout>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
            usage5: `
                <<yu-layout style="color: #000;">
                    <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                    <yu-layout>
                        <yu-sider style="height: 200px; width: 25%; background: #d3dce6;">sider</yu-sider>
                        <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                    </yu-layout>
                    <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
            usage6: `
                <yu-layout style="color: #000;">
                    <yu-sider style="height: 320px; width: 25%; background: #d3dce6;">sider</yu-sider>
                    <yu-layout>
                        <yu-header style="height: 60px; background: #B3C0D1;">header</yu-header>
                        <yu-content style="height: 200px; background: #E9EEF3;">content</yu-content>
                        <yu-footer style="height: 60px; background: #B3C0D1;">footer</yu-footer>
                    </yu-layout>
                </yu-layout>
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>