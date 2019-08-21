<template>
    <div>
        <div>
            <p>基础用法，通过组合 row 和 col 组件，并通过设置 col 组件的 span 属性就可以自由布局</p>
            <yu-row>
                <yu-col :span="24"><div style="background: #99a9bf">24</div></yu-col>
            </yu-row>
            <yu-row style="margin-top: 10px;">
                <yu-col :span="12"><div style="background: #d3dce6">12</div></yu-col>
                <yu-col :span="12"><div style="background: #e5e9f2">12</div></yu-col>
            </yu-row>
            <yu-row style="margin-top: 10px;">
                <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                <yu-col :span="8"><div style="background: #d3dce6">8</div></yu-col>
                <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
            </yu-row>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>分栏间隔，通过设置 row 组件的 gutter 属性即可，单位为 px</p>
            <yu-row :gutter="20">
                <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                <yu-col :span="8"><div style="background: #d3dce6">8</div></yu-col>
                <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
            </yu-row>

            <pre><code>{{usage2}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>分栏偏移，通过设置 col 组件的 offset 属性可以指定分栏偏移的栏数</p>
            <yu-row>
                <yu-col :span="6"><div style="background: #e5e9f2">6</div></yu-col>
                <yu-col :span="6" :offset="6"><div style="background: #d3dce6">6</div></yu-col>
            </yu-row>
            <yu-row>
                <yu-col :span="6" :offset="6"><div style="background: #e5e9f2">6</div></yu-col>
                <yu-col :span="6" :offset="6"><div style="background: #d3dce6">6</div></yu-col>
            </yu-row>

            <pre><code>{{usage3}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuRow from 'src/grid/row'
import YuCol from 'src/grid/col'
export default {
    name: 'ButtonDemos',
    components: { YuRow, YuCol },
    data() {
        return {
            usage1: `
                <yu-row>
                    <yu-col :span="24"><div style="background: #99a9bf">24</div></yu-col>
                </yu-row>
                <yu-row style="margin-top: 10px;">
                    <yu-col :span="12"><div style="background: #d3dce6">12</div></yu-col>
                    <yu-col :span="12"><div style="background: #e5e9f2">12</div></yu-col>
                </yu-row>
                <yu-row style="margin-top: 10px;">
                    <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                    <yu-col :span="8"><div style="background: #d3dce6">8</div></yu-col>
                    <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                </yu-row>
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-row :gutter="20">
                    <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                    <yu-col :span="8"><div style="background: #d3dce6">8</div></yu-col>
                    <yu-col :span="8"><div style="background: #e5e9f2">8</div></yu-col>
                </yu-row>
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-row>
                    <yu-col :span="6"><div style="background: #e5e9f2">6</div></yu-col>
                    <yu-col :span="6" :offset="6"><div style="background: #d3dce6">6</div></yu-col>
                </yu-row>
                <yu-row>
                    <yu-col :span="6" :offset="6"><div style="background: #e5e9f2">6</div></yu-col>
                    <yu-col :span="6" :offset="6"><div style="background: #d3dce6">6</div></yu-col>
                </yu-row>
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-col > div {
    height: 36px;
    border-radius: 4px;
    text-align: center;
    line-height: 36px;
}
</style>
