<template>
    <div class="demo-wrapper">
        <yu-cascader 
            :source="source" 
            popoverHeight="200px" 
            :selected.sync="selected" 
            @update:selected="xxx"
            :load-data="loadData"
        ></yu-cascader>
    </div>
</template>

<script>
import db from './db.js'

function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
        let timerId = setTimeout(() => {
            let result = db.filter(item => item.parent_id === parentId)
            result.forEach(node => {
                const children = db.filter(item => item.parent_id === node.id)
                node.isLeaf = children.length === 0
            })
            resolve(result)
        }, 2000);
    })
}
export default {
    name: 'demo',

    data() {
        return {
            selected: [],
            source: []
        }
    },

    created() {
        ajax(0).then((result) => {
            this.source = result
            console.log(result)
        })
    },

    methods: {
        loadData(item, cb) {
            let {id} = item
            ajax(id).then(result => {
                cb(result)
            })
        },
        xxx() {
            ajax(this.selected[0].id).then(result => {
                let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
                this.$set(lastLevelSelected, 'children', result)
            })
        }
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


