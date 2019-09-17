<template>
    <div class="yu-nav-demos">
        <div>
            <p>基础用法</p>
            
            <yu-nav :selected.sync="selected1">
                <yu-nav-item name="item1">菜单1</yu-nav-item>
                <yu-nav-item name="item2">菜单2</yu-nav-item>
                <yu-nav-item name="item3">菜单3</yu-nav-item>
            </yu-nav>

            <pre><code>{{usage1}}</code></pre>
        </div>
        <div style="margin-top: 40px;">
            <p>支持任意层级嵌套</p>

            <yu-nav :selected.sync="selected2">
                <yu-sub-nav name="item1">
                    <span slot="title">菜单1</span>
                    <yu-nav-item name="item1-1">菜单1-1</yu-nav-item>
                    <yu-nav-item name="item1-2">菜单1-2</yu-nav-item>
                    <yu-nav-item name="item1-3">菜单1-3</yu-nav-item>
                </yu-sub-nav>
                <yu-sub-nav name="item2">
                    <span slot="title">菜单2</span>
                    <yu-nav-item name="item2-1">菜单2-1</yu-nav-item>
                    <yu-nav-item name="item2-2">菜单2-2</yu-nav-item>
                    <yu-sub-nav name="item2-3">
                        <span slot="title">菜单2-3</span>
                        <yu-nav-item name="item2-3-1">菜单2-3-1</yu-nav-item>
                        <yu-nav-item name="item2-3-2">菜单2-3-2</yu-nav-item>
                        <yu-nav-item name="item2-3-3">菜单2-3-3</yu-nav-item>
                    </yu-sub-nav>
                </yu-sub-nav>
                <yu-nav-item name="item3">菜单3</yu-nav-item>
            </yu-nav>

            <pre><code>{{usage2}}</code></pre>
        </div>

        <div style="margin-top: 40px;">
            <p>支持垂直方向，可通过设置 vertical 属性为 true 切换到垂直方向</p>

            <yu-nav :selected.sync="selected3" vertical  style="width: 150px;">
                <yu-sub-nav name="item1">
                    <span slot="title">菜单1</span>
                    <yu-nav-item name="item1-1">菜单1-1</yu-nav-item>
                    <yu-nav-item name="item1-2">菜单1-2</yu-nav-item>
                    <yu-nav-item name="item1-3">菜单1-3</yu-nav-item>
                </yu-sub-nav>
                <yu-sub-nav name="item2">
                    <span slot="title">菜单2</span>
                    <yu-nav-item name="item2-1">菜单2-1</yu-nav-item>
                    <yu-nav-item name="item2-2">菜单2-2</yu-nav-item>
                    <yu-sub-nav name="item2-3">
                        <span slot="title">菜单2-3</span>
                        <yu-nav-item name="item2-3-1">菜单2-3-1</yu-nav-item>
                        <yu-nav-item name="item2-3-2">菜单2-3-2</yu-nav-item>
                        <yu-nav-item name="item2-3-3">菜单2-3-3</yu-nav-item>
                    </yu-sub-nav>
                </yu-sub-nav>
                <yu-nav-item name="item3">菜单3</yu-nav-item>
            </yu-nav>

            <pre><code>{{usage3}}</code></pre>
        </div>
    </div>
</template>

<script>
import YuNav from 'src/nav/nav'
import YuSubNav from 'src/nav/sub-nav'
import YuNavItem from 'src/nav/nav-item'
export default {
    name: 'PagerDemos',
    components: { YuNav, YuSubNav, YuNavItem },
    data() {
        return {
            selected1: 'item1',
            selected2: 'item3',
            selected3: 'item3',
            usage1: `
                <yu-nav :selected.sync="selected1">
                    <yu-nav-item name="item1">菜单1</yu-nav-item>
                    <yu-nav-item name="item2">菜单2</yu-nav-item>
                    <yu-nav-item name="item3">菜单3</yu-nav-item>
                </yu-nav>

                data() {
                    return {
                        selected1: 'item1'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage2: `
                <yu-nav :selected.sync="selected2">
                    <yu-sub-nav name="item1">
                        <span slot="title">菜单1</span>
                        <yu-nav-item name="item1-1">菜单1-1</yu-nav-item>
                        <yu-nav-item name="item1-2">菜单1-2</yu-nav-item>
                        <yu-nav-item name="item1-3">菜单1-3</yu-nav-item>
                    </yu-sub-nav>
                    <yu-sub-nav name="item2">
                        <span slot="title">菜单2</span>
                        <yu-nav-item name="item2-1">菜单2-1</yu-nav-item>
                        <yu-nav-item name="item2-2">菜单2-2</yu-nav-item>
                        <yu-sub-nav name="item2-3">
                            <span slot="title">菜单2-3</span>
                            <yu-nav-item name="item2-3-1">菜单2-3-1</yu-nav-item>
                            <yu-nav-item name="item2-3-2">菜单2-3-2</yu-nav-item>
                            <yu-nav-item name="item2-3-3">菜单2-3-3</yu-nav-item>
                        </yu-sub-nav>
                    </yu-sub-nav>
                    <yu-nav-item name="item3">菜单3</yu-nav-item>
                </yu-nav>

                data() {
                    return {
                        selected2: 'item3'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
            usage3: `
                <yu-nav :selected.sync="selected3" vertical  style="width: 150px;">
                    <yu-sub-nav name="item1">
                        <span slot="title">菜单1</span>
                        <yu-nav-item name="item1-1">菜单1-1</yu-nav-item>
                        <yu-nav-item name="item1-2">菜单1-2</yu-nav-item>
                        <yu-nav-item name="item1-3">菜单1-3</yu-nav-item>
                    </yu-sub-nav>
                    <yu-sub-nav name="item2">
                        <span slot="title">菜单2</span>
                        <yu-nav-item name="item2-1">菜单2-1</yu-nav-item>
                        <yu-nav-item name="item2-2">菜单2-2</yu-nav-item>
                        <yu-sub-nav name="item2-3">
                            <span slot="title">菜单2-3</span>
                            <yu-nav-item name="item2-3-1">菜单2-3-1</yu-nav-item>
                            <yu-nav-item name="item2-3-2">菜单2-3-2</yu-nav-item>
                            <yu-nav-item name="item2-3-3">菜单2-3-3</yu-nav-item>
                        </yu-sub-nav>
                    </yu-sub-nav>
                    <yu-nav-item name="item3">菜单3</yu-nav-item>
                </yu-nav>

                data() {
                    return {
                        selected3: 'item3'
                    }
                }
            `.replace(/^ {16}/gm, '').trim(),
        }
    }
    
}
</script>

<style lang="scss" scoped>
.yu-pager-demos {
    .yu-button {
        margin-bottom: 10px;
    }
}
</style>

