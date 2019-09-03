<template>
    <div>
        <div>
            <p>基础用法，可同时展开多个面板，面板之间不影响</p>
            
            <yu-collapse :selected.sync="selected1">
                <yu-collapse-item name="item1" title="面板一">
                    <p>content1</p>
                </yu-collapse-item>
                <yu-collapse-item name="item2" title="面板二">
                    <p>content2</p>
                </yu-collapse-item>
                <yu-collapse-item name="item3" title="面板三">
                    <p>content3</p>
                </yu-collapse-item>
            </yu-collapse>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>手风琴模式，通过设置 single 属性，每次只能展开一个面板</p>
            
            <yu-collapse :selected.sync="selected2" single>
                <yu-collapse-item name="item1" title="面板一">
                    <p>content1</p>
                </yu-collapse-item>
                <yu-collapse-item name="item2" title="面板二">
                    <p>content2</p>
                </yu-collapse-item>
                <yu-collapse-item name="item3" title="面板三">
                    <p>content3</p>
                </yu-collapse-item>
            </yu-collapse>

            <pre><code>{{usage2}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuCollapse from 'src/collapse/collapse'
import YuCollapseItem from 'src/collapse/collapse-item'
export default {
    name: 'CollapseDemos',
    components: { YuCollapse, YuCollapseItem },
    data() {
        return {
            selected1: [],
            selected2: [],
            usage1: `
                <yu-collapse :selected.sync="selected">
                    <yu-collapse-item name="item1" title="面板一">
                        <p>content1</p>
                    </yu-collapse-item>
                    <yu-collapse-item name="item2" title="面板二">
                        <p>content2</p>
                    </yu-collapse-item>
                    <yu-collapse-item name="item3" title="面板三">
                        <p>content3</p>
                    </yu-collapse-item>
                </yu-collapse>

                data() {
                    return {
                        selected: []
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-collapse :selected.sync="selected" single>
                    <yu-collapse-item name="item1" title="面板一">
                        <p>content1</p>
                    </yu-collapse-item>
                    <yu-collapse-item name="item2" title="面板二">
                        <p>content2</p>
                    </yu-collapse-item>
                    <yu-collapse-item name="item3" title="面板三">
                        <p>content3</p>
                    </yu-collapse-item>
                </yu-collapse>

                data() {
                    return {
                        selected: []
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

