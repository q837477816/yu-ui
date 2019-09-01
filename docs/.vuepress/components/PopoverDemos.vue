<template>
    <div>
        <div>
            <p>基础用法</p>
            <yu-popover>
                <yu-button>Trigger</yu-button>
                <p slot="content">Content</p>
            </yu-popover>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>设置 position 位置，可选 top/bottom/left/right，默认为 top</p>
            <yu-popover>
                <yu-button>上面</yu-button>
                <p slot="content">上面</p>
            </yu-popover>
            <yu-popover position="bottom">
                <yu-button>下面</yu-button>
                <p slot="content">下面</p>
            </yu-popover>
            <yu-popover position="left">
                <yu-button>左边</yu-button>
                <p slot="content">左边</p>
            </yu-popover>
            <yu-popover position="right">
                <yu-button>右边</yu-button>
                <p slot="content">右边</p>
            </yu-popover>

            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>设置 trigger 触发方式，可选 click/hover，默认为 click</p>
            <yu-popover>
                <yu-button trigger="click">Click</yu-button>
                <p slot="content">click 触发</p>
            </yu-popover>
            <yu-popover trigger="hover">
                <yu-button>Hover</yu-button>
                <p slot="content">hover 触发</p>
            </yu-popover>

            <pre><code>{{usage3}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuPopover from 'src/popover/popover'
import YuButton from 'src/button/button'
export default {
    name: 'PopoverDemos',
    components: { YuPopover, YuButton },
    data() {
        return {
            usage1: `
                <yu-popover>
                    <yu-button>Trigger</yu-button>
                    <p slot="content">Content</p>
                </yu-popover>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-popover>
                    <yu-button>上面</yu-button>
                    <p slot="content">上面</p>
                </yu-popover>
                <yu-popover position="bottom">
                    <yu-button>下面</yu-button>
                    <p slot="content">下面</p>
                </yu-popover>
                <yu-popover position="left">
                    <yu-button>左边</yu-button>
                    <p slot="content">左边</p>
                </yu-popover>
                <yu-popover position="right">
                    <yu-button>右边</yu-button>
                    <p slot="content">右边</p>
                </yu-popover>
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-popover>
                    <yu-button trigger="click">Click</yu-button>
                    <p slot="content">click 触发</p>
                </yu-popover>
                <yu-popover trigger="hover">
                    <yu-button>Hover</yu-button>
                    <p slot="content">hover 触发</p>
                </yu-popover>
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

