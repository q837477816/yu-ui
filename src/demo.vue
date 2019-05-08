<template>
    <div class="demo-wrapper">
        <yu-pager 
        :total-page="1"
        :current-page.sync="currentPage"
        :hide-if-one-page="false"
        ></yu-pager>
    </div>
</template>

<script>
export default {
    name: 'demo',

    data() {
        return {
            currentPage: 1
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


