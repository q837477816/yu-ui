<template>
    <div>
        <div>
            <p>基础用法</p>
            <yu-tabs :selected="selected1">
                <yu-tabs-head>
                    <yu-tabs-item name="sport">体育</yu-tabs-item>
                    <yu-tabs-item name="news">新闻</yu-tabs-item>
                    <yu-tabs-item name="people">人文</yu-tabs-item>
                </yu-tabs-head>
                <yu-tabs-body>
                    <yu-tabs-pane name="sport">
                        <div>体育</div>
                    </yu-tabs-pane>
                    <yu-tabs-pane name="news">
                        <div>新闻</div>
                    </yu-tabs-pane>
                    <yu-tabs-pane name="people">
                        <div>人文</div>
                    </yu-tabs-pane>
                </yu-tabs-body>
            </yu-tabs>
            
            <pre><code>{{usage1}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>disabled 状态，通过给 yu-tabs-item 组件设置 disabled 属性即可</p>
            <yu-tabs :selected="selected2">
                <yu-tabs-head>
                    <yu-tabs-item name="sport">体育</yu-tabs-item>
                    <yu-tabs-item name="news" disabled>新闻</yu-tabs-item>
                    <yu-tabs-item name="people">人文</yu-tabs-item>
                </yu-tabs-head>
                <yu-tabs-body>
                    <yu-tabs-pane name="sport">
                        <div>体育</div>
                    </yu-tabs-pane>
                    <yu-tabs-pane name="news">
                        <div>新闻</div>
                    </yu-tabs-pane>
                    <yu-tabs-pane name="people">
                        <div>人文</div>
                    </yu-tabs-pane>
                </yu-tabs-body>
            </yu-tabs>

            <pre><code>{{usage2}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuTabs from 'src/tabs/tabs'
import YuTabsHead from 'src/tabs/tabs-head'
import YuTabsBody from 'src/tabs/tabs-body'
import YuTabsItem from 'src/tabs/tabs-item'
import YuTabsPane from 'src/tabs/tabs-pane'
export default {
    name: 'TabsDemos',
    components: { YuTabs, YuTabsHead, YuTabsBody, YuTabsItem, YuTabsPane },
    data() {
        return {
            selected1: 'sport',
            selected2: 'sport',
            usage1: `
                <yu-tabs :selected="selected">
                    <yu-tabs-head>
                        <yu-tabs-item name="sport">体育</yu-tabs-item>
                        <yu-tabs-item name="news">新闻</yu-tabs-item>
                        <yu-tabs-item name="people">人文</yu-tabs-item>
                    </yu-tabs-head>
                    <yu-tabs-body>
                        <yu-tabs-pane name="sport">
                            <div>体育</div>
                        </yu-tabs-pane>
                        <yu-tabs-pane name="news">
                            <div>新闻</div>
                        </yu-tabs-pane>
                        <yu-tabs-pane name="people">
                            <div>人文</div>
                        </yu-tabs-pane>
                    </yu-tabs-body>
                </yu-tabs>

                data() {
                    return {
                        selected: 'sport'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-tabs :selected="selected2">
                    <yu-tabs-head>
                        <yu-tabs-item name="sport">体育</yu-tabs-item>
                        <yu-tabs-item name="news" disabled>新闻</yu-tabs-item>
                        <yu-tabs-item name="people">人文</yu-tabs-item>
                    </yu-tabs-head>
                    <yu-tabs-body>
                        <yu-tabs-pane name="sport">
                            <div>体育</div>
                        </yu-tabs-pane>
                        <yu-tabs-pane name="news">
                            <div>新闻</div>
                        </yu-tabs-pane>
                        <yu-tabs-pane name="people">
                            <div>人文</div>
                        </yu-tabs-pane>
                    </yu-tabs-body>
                </yu-tabs>

                data() {
                    return {
                        selected: 'sport'
                    }
                }
            `.replace(/^ {16}/gm, '').trim()
        }
    }
}
</script>

