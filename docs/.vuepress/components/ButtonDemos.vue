<template>
    <div>
        <div>
            <p>基础用法</p>
            <yu-button>默认按钮</yu-button>
            <yu-button icon="settings">默认按钮</yu-button>
            <yu-button loading>加载中</yu-button>
            <yu-button disabled>默认按钮</yu-button>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>设置icon位置，可选 left 或者 right，默认为 left</p>
            <yu-button icon="back" icon-position="left">上一页</yu-button>
            <yu-button icon="next" icon-position="right">下一页</yu-button>

            <pre><code>{{usage2}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuButton from 'src/button/button'
export default {
    name: 'ButtonDemos',
    components: { YuButton },
    data() {
        return {
            usage1: `
                <yu-button>默认按钮</yu-button>
                <yu-button icon="settings">默认按钮</yu-button>
                <yu-button :loading="true">默认按钮</yu-button>
                <yu-button disabled>默认按钮</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-button icon="back" icon-position="left">默认按钮</yu-button>
                <yu-button icon="next" icon-position="right">默认按钮</yu-button>
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

