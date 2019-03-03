<template>
    <div class="demo-wrapper">
        <yu-cascader 
            :source="source" 
            popoverHeight="200px" 
            :selected.sync="selected" 
        ></yu-cascader>
    </div>
</template>

<script>
import db from './db.js'
function ajax(parentId = 0) {
    return db.filter(item => item.parent_id === parentId)
}   
console.log(ajax())
export default {
    name: 'demo',

    data() {
        return {
            selected: [],
            source: ajax()
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


