<template>
    <div class="demo-wrapper">
        当前排序信息：{{sortInfo}}
        <yu-table
            :data="tableData1"
            :columns="columns"
            @changeOrderBy="changeOrderBy"
            compact
        ></yu-table>
    </div>
</template>·

<script>
export default {
    name: 'demo',

    data() {
        return {
            currentPage: 1,
            columns: [
                {label: '姓名', field: 'name', width: '100px'},
                {label: '分数', field: 'score', width: '100px', sort: true},
            ],
            tableData1: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
            ],
            selectedItems: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90}
            ],
            sortInfo: {},
            loading: false,
        }
    },

    mounted() {
        
    },

    methods: {
        changeOrderBy(obj) {
            console.log(obj)
            this.sortInfo = obj
            const {field, value} = obj
            this.tableData = this.tableData1.sort((a, b) => {
                if (value > 0) {
                    return a[field] - b[field]
                }
                if (value < 0) {
                    return b[field] - a[field]
                }
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


