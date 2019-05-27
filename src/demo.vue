<template>
    <div class="demo-wrapper">
        <yu-table
            :data="tableData"
            :columns="columns"
            :striped="false"
            indexVisible
            border
            compact
        ></yu-table>
        <yu-table
            style="margin-top: 20px;"
            :data="tableData"
            :selectedItems.sync="selectedItems"
            :columns="columns"
            indexVisible
            selection
            border
        ></yu-table>
        <p>当前选中了：{{selectedItems}}</p>
        <yu-table
            style="margin-top: 20px;"
            :data="tableData"
            :columns="columns"
            :orderBy="orderBy"
            @changeOrderBy="changeOrderBy"
            indexVisible
            border
        ></yu-table>
        <p>当前排序信息为：{{sortInfo}}</p>
        <yu-pager 
            style="margin-top: 20px;"
            :total-page="10"
            :current-page.sync="currentPage"
        ></yu-pager>
    </div>
</template>·

<script>
export default {
    name: 'demo',

    data() {
        return {
            currentPage: 1,
            columns: [
                {text: '姓名', field: 'name'},
                {text: '分数', field: 'score'},
            ],
            tableData: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
            ],
            selectedItems: [],
            orderBy: ['score'],
            sortInfo: {}
        }
    },

    mounted() {
        
    },

    methods: {
        changeOrderBy(obj) {
            this.sortInfo = obj
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


