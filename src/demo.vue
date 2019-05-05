<template>
    <div class="demo-wrapper">
        <yu-nav :selected.sync="selected" >
            <yu-nav-item name="home">首页</yu-nav-item>
            <yu-sub-nav name="about">
                <template slot="title">关于</template>
                <yu-nav-item name="culture">企业文化</yu-nav-item>
                <yu-nav-item name="team">开发团队</yu-nav-item>
                <yu-sub-nav name="contact">
                    <template slot="title">联系方式</template>
                    <yu-nav-item name="wechat">微信</yu-nav-item>
                    <yu-nav-item name="qq">QQ</yu-nav-item>
                    <yu-sub-nav name="phone">
                        <template slot="title">手机</template>
                        <yu-nav-item name="yidong">移动</yu-nav-item>
                        <yu-nav-item name="liantong">联通</yu-nav-item>
                        <yu-nav-item name="dianxin">电信</yu-nav-item>
                    </yu-sub-nav>
                </yu-sub-nav>
            </yu-sub-nav>
            <yu-nav-item name="hire">招聘</yu-nav-item>
        </yu-nav>
        <p>当前选中的值为 {{selected}}</p>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            selected: 'culture'
        }
    },

    created() {
    },

    methods: {
        
    }

}
</script>

<style>
*{margin: 0; padding: 0; box-sizing: border-box;}

:root{
    --font-size: 14px;
}
body{
    font-size: var(--font-size)
}
.demo-wrapper {
    padding: 20px;
}

</style>


