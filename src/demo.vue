<template>
    <div class="demo-wrapper">
        <yu-table
            :data="tableData1"
            :columns="columns"
            striped
            indexVisible
            border
            compact
        ></yu-table>

        <!-- <yu-table
            style="margin-top: 20px;"
            :data="tableData2"
            :selectedItems.sync="selectedItems"
            :columns="columns"
            indexVisible
            selection
            border
        ></yu-table>
        <p>当前选中了：{{selectedItems}}</p>

        <yu-table
            style="margin-top: 20px;"
            :data="tableData3"
            :columns="columns"
            :orderBy="orderBy"
            @changeOrderBy="changeOrderBy"
            indexVisible
            border
        ></yu-table>
        <p>当前排序信息为：{{sortInfo}}</p>

        <yu-table
            style="margin-top: 20px;"
            :data="tableData3"
            :columns="columns"
            :loading="loading"
            indexVisible
            border
        ></yu-table>
        <yu-button @click="loading = !loading">切换loading状态</yu-button>

        <h1 style="margin-top: 20px;">固定表头</h1>
        <yu-table
            :data="tableData4"
            :columns="columns"
            :orderBy="orderBy"
            height="400px"
            selection
            border
        ></yu-table>

        <yu-pager 
            style="margin-top: 20px;"
            :total-page="10"
            :current-page.sync="currentPage"
        ></yu-pager> -->

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
                {label: '分数', field: 'score', width: '100px'},
            ],
            tableData1: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
            ],
            tableData2: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
            ],
            tableData3: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
            ],
            tableData4: [
                {id: 1, name: '德邦', score: 100},
                {id: 2, name: '盖伦', score: 90},
                {id: 3, name: '皇子', score: 80},
                {id: 4, name: '露露', score: 70},
                {id: 5, name: '凤女', score: 65},
                {id: 6, name: '锐雯', score: 60},
                {id: 8, name: '德邦', score: 100},
                {id: 9, name: '盖伦', score: 90},
                {id: 10, name: '皇子', score: 80},
                {id: 11, name: '露露', score: 70},
                {id: 12, name: '凤女', score: 65},
                {id: 13, name: '锐雯', score: 60},
                {id: 14, name: '德邦', score: 100},
                {id: 15, name: '盖伦', score: 90},
                {id: 16, name: '皇子', score: 80},
                {id: 17, name: '露露', score: 70},
                {id: 18, name: '凤女', score: 65},
                {id: 19, name: '锐雯', score: 60},
                {id: 20, name: '德邦', score: 100},
            ],
            selectedItems: [],
            orderBy: ['score'],
            sortInfo: {},
            loading: false
        }
    },

    mounted() {
        
    },

    methods: {
        changeOrderBy(obj) {
            this.sortInfo = obj
            const {field, value} = obj
            this.tableData = this.tableData3.sort((a, b) => {
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


