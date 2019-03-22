<template>
    <div class="demo-wrapper">
        <yu-layout style="color: #000; margin-bottom:50px;">
            <yu-header style="height: 50px; background: #B3C0D1;">header</yu-header>
            <yu-content style="height: 100px; background: #E9EEF3;">content</yu-content>
        </yu-layout>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            selected: undefined
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


