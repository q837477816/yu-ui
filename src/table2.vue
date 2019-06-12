<template>
    <div class="yu-table-outer-wrapper">
        <div class="yu-table-inner-wrapper">
            <div class="yu-table-head">
                <table :class="{compact, border}">
                    <colgroup>
                        <col name="expend" width="50px" v-if="expendFiled">
                        <col name="selection" width="50px" v-if="selection">
                        <col name="index" width="50px" v-if="indexVisible">
                        <col v-for="column in columns" :width="column.width">
                        <col name="operation" width="150px"  v-if="$scopedSlots.default">
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="1" v-if="expendFiled"></th>
                            <th :align="indexAlign" v-if="selection">
                                <input 
                                ref="allCheck"
                                type="checkbox"
                                :checked="allItemsSelected"
                                @change="onChangeAllItems">
                            </th>
                            <th :align="indexAlign" v-if="indexVisible">#</th>
                            <th v-for="column in columns">
                                <div class="yu-table-head-label">
                                    {{column.label}}
                                    <span 
                                        class="yu-table-head-sort" 
                                        v-if="column.sort"
                                        @click="changeOrderByHash(column.field)">
                                        <yu-icon 
                                            name="asc"
                                            :class="{active: orderByHash[column.field] === 1}"
                                        ></yu-icon>
                                        <yu-icon 
                                            name="desc"
                                            :class="{active: orderByHash[column.field] === -1}"
                                        ></yu-icon>
                                    </span>
                                </div>
                            </th>
                            <th v-if="$scopedSlots.default">操作</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="yu-table-body" :style="computedStyle">
                <table :class="{striped, compact, border}">
                    <colgroup>
                        <col name="expend" width="50px" v-if="expendFiled">
                        <col name="selection" width="50px" v-if="selection">
                        <col name="index" width="50px" v-if="indexVisible">
                        <col v-for="column in columns" :width="column.width">
                        <col name="operation" width="150px"  v-if="$scopedSlots.default">
                    </colgroup>
                    <tbody>
                        <template v-for="item, index in data">
                            <tr>
                                <td :align="indexAlign" v-if="expendFiled">
                                    <yu-icon 
                                        :class="['yu-table-expend-icon', {expend: expendItems.includes(item)}]"
                                        name="right"
                                        @click="changeRowExpendStatus(item)"
                                    ></yu-icon>
                                </td>
                                <td :align="indexAlign" v-if="selection">
                                    <input 
                                    type="checkbox"
                                    :checked="itemSelected(item)"
                                    @change="onChangeItem(item, index, $event)">
                                </td>
                                <td :align="indexAlign" v-if="indexVisible">{{index + 1}}</td>
                                <td v-for="column in columns">
                                    {{item[column.field]}}
                                </td>
                                <td v-if="$scopedSlots.default">
                                    <slot :row="item"></slot>
                                </td>
                            </tr>
                            <tr v-if="expendFiled && expendItems.includes(item)">
                                <td :colspan="expendedCellColSpan">{{item[expendFiled] || '暂无数据'}}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="yu-table-loading" v-if="loading">
            <yu-icon name="loading"></yu-icon>
        </div>
    </div>
</template>

<script>
import YuIcon from './icon'
export default {
    name: 'YuTable',
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true,
            validator: (arr) => { // todo: data每项都要有唯一的id
                return arr.every(item => item.id !== undefined)
            }
        },
        selectedItems: {
            type: Array,
            default: () => []
        },
        selection: {
            type: Boolean,
            default: false
        },
        indexVisible: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        compact: {
            type: Boolean,
            default: false
        },
        height: {
            type: [String, Number]
        },
        striped: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        expendFiled: {
            type: String,
        }
    },
    data() {
        let orderByHash = {}
        this.columns.forEach(column => {
            if (column.sort) {
                orderByHash[column.field] = 0
            }
        })
        return {
            orderByHash,
            expendItems: []
        }
    },
    computed: {
        indexAlign() {
            return this.border ? 'center' : 'left'
        },
        allItemsSelected() {
            if (this.selectedItems.length !== this.data.length) return false
            const allIds = this.data.map(item => item.id).sort()
            const selectedIds = this.selectedItems.map(item => item.id).sort()
            for (let i = 0; i < allIds.length; i++) {
                if (allIds[i] !== selectedIds[i]) {
                    return false
                }
            }
            return true
        },
        computedStyle() {
            if (this.height) {
                const headHeight = this.compact ? 36 : 28;
                const bodyHeight = Number.parseFloat(this.height) - headHeight
                return {height: bodyHeight + 'px'}
            }
        },
        expendedCellColSpan() {
            let span = 1
            if (this.selection) {
                span += 1
            }
            if (this.indexVisible) {
                span += 1
            }
            return span + this.columns.length
        }
    },
    watch: {
        selectedItems(newSelectedItems) {
            this.selection && this.setIndeterminate()
        },
    },
    mounted() {
        this.selection && this.setIndeterminate()
    },
    methods: {
        itemSelected(item) {
            return this.selectedItems.filter(i => i.id === item.id).length
        },
        onChangeAllItems(e) {
            const checked = e.target.checked
            this.$emit('update:selectedItems', checked ? this.data : [])           
        },
        onChangeItem(item, index, e) {
            const checked = e.target.checked
            let copy = JSON.parse(JSON.stringify(this.selectedItems))
            if (checked) {
                copy.push(item)
            } else {
                copy = copy.filter(i => i.id !== item.id)
            }
            this.$emit('update:selectedItems', copy)
        },
        setIndeterminate() {
            this.$refs.allCheck.indeterminate = this.selectedItems.length > 0 && this.selectedItems.length < this.data.length
        },
        changeOrderByHash(field) {
            if (this.orderByHash[field] === 1) {
                this.orderByHash[field] = -1
            } else {
                this.orderByHash[field]++
            }
            this.$emit('changeOrderBy', {field, value: this.orderByHash[field]})
        },
        changeRowExpendStatus(item) {
            const idx = this.expendItems.indexOf(item)
            if (idx >= 0) {
                this.expendItems.splice(idx, 1)
            } else {
                this.expendItems.push(item)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/_var';
$grey: darken($grey, 10%);
.yu-table-outer-wrapper {
    position: relative;
    .yu-table-inner-wrapper {
        .yu-table-body {
            overflow: auto;
        }
        table {
            table-layout: fixed;
            width: 100%;
            border-collapse: collapse;
            thead, tbody {
                tr {
                    border-bottom: 1px solid $grey;
                    text-align: left;
                    th, td {
                        padding: 4px;
                    }
                }
            }
            tbody > tr {
                &:hover {
                    background-color: #f5f7fa;
                }
            }
            &.striped > tbody > tr {
                &:nth-child(odd) {
                    background-color: lighten($grey, 10%);
                }
                &:nth-child(even) {
                    background-color: #fff;
                }
                &:hover {
                    background-color: #f5f7fa;
                }
            }
            &.border {
                th {
                    border: 1px solid $grey;
                }
                td {
                    border-left: 1px solid $grey;
                    border-right: 1px solid $grey;
                }
            }
            &.compact {
                th, td { padding: 8px; }
            }
            .yu-table-head-label {
                display: flex;
                align-items: center;
                .yu-table-head-sort {
                    display: inline-flex;
                    flex-direction: column;
                    margin: 0 4px;
                    cursor: pointer;
                    svg {
                        width: 10px;
                        height: 10px;
                        fill: $grey;
                        position: relative;
                        &.active {
                            fill: red;
                        }
                        &:first-child {
                            bottom: -1px;
                        }
                        &:last-child {
                            top: -1px;
                        }
                    }
                }
            }
        }
        // 固定表头时模拟底部边框
        &::after {
            content: "";
            display: block;
            height: 0px;
            position: relative;
            top: -1px;
            border-bottom: 1px solid $grey;
        }
    }
    .yu-table-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.8);
        svg {
            width: 50px;
            height: 50px;
            @include loading;
        }
    }
    .yu-table-expend-icon {
        width: 10px;
        height: 10px;
        cursor: pointer;
        &.expend {
            transform: rotate(90deg);
            transition: transform 250ms;
        }
    }
}
</style>


