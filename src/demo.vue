<template>
    <div class="demo-wrapper">
        <yu-nav :selected.sync="selected" multiple>
            <yu-nav-item name="home">首页</yu-nav-item>
            <yu-nav-item name="about">关于</yu-nav-item>
            <yu-nav-item name="hire">招聘</yu-nav-item>
        </yu-nav>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            selected: ['home']
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


