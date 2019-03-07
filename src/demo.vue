<template>
    <div class="demo-wrapper">
        <yu-slides :selected.sync="selected">
            <yu-slides-item name="name1">
                <div class="box">1</div>
            </yu-slides-item>
            <yu-slides-item name="name2">
                <div class="box">2</div>
            </yu-slides-item>
            <yu-slides-item name="name3">
                <div class="box">3</div>
            </yu-slides-item>
        </yu-slides>
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
.box {
    width: 100%;
    height: 300px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>


