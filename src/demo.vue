<template>
    <div class="demo-wrapper">
        <yu-nav :selected.sync="selected" multiple>
            <yu-nav-item name="home">首页</yu-nav-item>
            <yu-sub-nav>
                <template slot="title">关于</template>
                <yu-nav-item name="about1">关于1</yu-nav-item>
                <yu-nav-item name="about2">关于2</yu-nav-item>
                <yu-nav-item name="about3">关于3</yu-nav-item>
            </yu-sub-nav>
            <yu-nav-item name="hire">招聘</yu-nav-item>
        </yu-nav>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            selected: ['home', 'about2']
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


